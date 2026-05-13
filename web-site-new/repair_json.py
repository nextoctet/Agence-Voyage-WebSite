import json
import re

def fix_encoding(text):
    try:
        # Try to fix the double-encoded UTF-8
        return text.encode('iso-8859-1').decode('utf-8')
    except:
        # Fallback for characters that might not follow the pattern or if already correct
        replacements = {
            'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
            'Ã±': 'ñ', 'Ã': 'Á', 'Ã‰': 'É', 'Ã': 'Í', 'Ã“': 'Ó',
            'Ãš': 'Ú', 'Ã‘': 'Ñ', 'Ã¿': 'ÿ', 'Â¿': '¿', 'Â¡': '¡'
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        return text

def clean_mangled_lines(lines):
    cleaned_lines = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Fix missing newlines between entries: "key1": "val1","key2": "val2"
        # This regex looks for "," followed by "
        parts = re.split(r',(?=")', line)
        for part in parts:
            part = part.strip()
            if part:
                if not part.endswith(',') and part != parts[-1]:
                     part += ','
                cleaned_lines.append(part)
    return cleaned_lines

def repair_json_structure(lines):
    # This is tricky. Some lines are like "key": "val": "key2": "val2"
    # Or "key": "val mangled
    repaired = {}
    
    for line in lines:
        line = line.strip()
        if line == '{' or line == '}':
            continue
        
        # Remove trailing comma for parsing
        content = line
        if content.endswith(','):
            content = content[:-1]
        
        try:
            # Try to parse as a single-item dict by wrapping in braces
            item = json.loads('{' + content + '}')
            repaired.update(item)
        except:
            # If it fails, it might be a mangled line or nested object
            # For this specific file, most issues seem to be flat or triple-keys
            
            # Handle triple-keys/mangled: "key": "mangled" : "key2": "val2"
            # Attempt to extract all "key": "value" pairs
            matches = re.findall(r'"((?:\\.|[^"])*)"\s*:\s*"((?:\\.|[^"])*)"', content)
            if matches:
                for k, v in matches:
                    repaired[k] = v
            else:
                # Still failing? Check if it's a start of a nested object we already know
                # like "why_bespoke": {
                if '": {' in line:
                    # We'll handle nested objects manually if they are broken
                    # But looking at the file, they seem okay in the beginning.
                    pass
    
    return repaired

def main():
    file_path = r'C:\Users\bilal\OneDrive\Desktop\Agence-Voyage-WebSite\web-site-new\public\locales\es\common.json'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Preliminary encoding fix
    content = fix_encoding(content)
    
    # Split into lines
    lines = content.splitlines()
    
    # First pass: split lines that have multiple entries
    lines = clean_mangled_lines(lines)
    
    # Second pass: extract keys and values, handling mangled structures
    # We want to preserve nested structures too. 
    # Let's try to parse what we can and fallback to regex for the broken parts.
    
    final_data = {}
    
    # Special handling for known nested objects which seem mostly okay in the beginning
    # I'll use the English file as a template for structure
    en_path = r'C:\Users\bilal\OneDrive\Desktop\Agence-Voyage-WebSite\web-site-new\public\locales\en\common.json'
    with open(en_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # We'll try to find translations for these keys
    def find_translation(key, lines_to_search):
        # Search for "key": "value"
        pattern = rf'"{re.escape(key)}"\s*:\s*"((?:\\.|[^"])*)"'
        for l in lines_to_search:
            match = re.search(pattern, l)
            if match:
                return match.group(1)
        return None

    # Reconstruct based on EN structure but keep all ES-only keys too
    new_es_data = {}
    
    # Extract all flat keys from ES file first to not lose anything
    all_es_pairs = {}
    for line in lines:
        matches = re.findall(r'"((?:\\.|[^"])*)"\s*:\s*"((?:\\.|[^"])*)"', line)
        for k, v in matches:
            all_es_pairs[k] = v

    # Fill EN structure
    for k, v in en_data.items():
        if isinstance(v, dict):
            new_es_data[k] = {}
            for sub_k, sub_v in v.items():
                # Try to find in ES
                es_val = all_es_pairs.get(sub_k)
                if not es_val:
                    # Try looking for nested patterns in lines if regex failed
                    pass
                new_es_data[k][sub_k] = es_val if es_val else sub_v
        else:
            es_val = all_es_pairs.get(k)
            new_es_data[k] = es_val if es_val else v

    # Add back any ES-only keys
    for k, v in all_es_pairs.items():
        if k not in new_es_data:
            # Check if it was part of a nested object
            is_nested = False
            for nested_obj in new_es_data.values():
                if isinstance(nested_obj, dict) and k in nested_obj:
                    is_nested = True
                    break
            if not is_nested:
                new_es_data[k] = v

    # Save fixed file
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(new_es_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
