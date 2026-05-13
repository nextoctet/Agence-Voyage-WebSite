import json
import re

def fix_encoding(text):
    try:
        # Try to fix the double-encoded UTF-8
        return text.encode('iso-8859-1').decode('utf-8')
    except:
        return text

def extract_pairs(content):
    # This regex tries to find "key": "value" pairs
    # It handles escaped quotes
    pairs = []
    # We'll search for patterns like "key" : "value"
    # and also handle cases where there might be multiple colons (mangled)
    
    # First, let's try to clean up some known mangled patterns
    content = content.replace('": "', '": "') # ensure standard spacing
    
    # regex for "key": "value"
    pattern = r'"((?:\\.|[^"])*)"\s*:\s*"((?:\\.|[^"])*)"'
    matches = re.finditer(pattern, content)
    for match in matches:
        pairs.append((match.group(1), match.group(2)))
    
    return pairs

def main():
    en_path = r'C:\Users\bilal\OneDrive\Desktop\Agence-Voyage-WebSite\web-site-new\public\locales\en\common.json'
    es_path = r'C:\Users\bilal\OneDrive\Desktop\Agence-Voyage-WebSite\web-site-new\public\locales\es\common.json'
    
    with open(en_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # We need the ORIGINAL ES content. Since I overwrote it, I'll have to hope the pairs I extracted are enough or re-extract from what's there.
    # Actually, I can use the fact that I have the content in my thought process if I had to, but I'll just work with the current file and try to fix it more intelligently.
    
    with open(es_path, 'r', encoding='utf-8') as f:
        es_content = f.read()
    
    # Fix encoding first
    es_content = fix_encoding(es_content)
    
    # Extract all pairs. Since the file is now mostly flat (because of my previous script), 
    # I should be careful about the nested ones.
    
    all_pairs = extract_pairs(es_content)
    pairs_dict = {}
    for k, v in all_pairs:
        # If we see a key multiple times, we might want to keep the one that looks "more" like Spanish
        # or just keep the first/last.
        pairs_dict[k] = v

    # Now let's try to specifically recover the nested objects from the ORIGINAL ES if they were lost.
    # I'll check if why_bespoke.label is currently correct.
    # Wait, I can see from my previous read_file that it was wrong.
    
    # Let's define the correct translations for known nested keys if they are mangled.
    # Looking at history, I can see what they were.
    
    manual_fixes = {
        "why_bespoke": {
            "label": "POR QUÉ A MEDIDA",
            "title": "Los tours organizados te muestran Marruecos. Los viajes a medida te permiten experimentarlo de verdad.",
            "body": "La diferencia no es simplemente la comodidad, sino la profundidad. Un ritmo más lento. Acceso privado. Encuentros que se desarrollan de forma natural. Experiencias diseñadas en torno a las personas, los ambientes y los momentos que más resuenan en usted.",
            "accent": "Viajes diseñados con intimidad, ritmo y visión cultural.",
            "dark_title": "Cada itinerario comienza con una conversación.",
            "dark_body_1": "Cómo le gusta viajar. Qué le inspira. Qué tipo de atmósfera permanece con usted mucho tiempo después de regresar a casa.",
            "dark_body_2": "A partir de ahí, cada viaje se diseña cuidadosamente con experiencia local, logística elegante y una atención al detalle profundamente personal. Un viaje que es inconfundiblemente, enteramente suyo.",
            "stat_1_num": "10+",
            "stat_1_label": "Años de experiencia local",
            "stat_2_num": "100%",
            "stat_2_label": "Itinerarios a medida",
            "stat_3_num": "6",
            "stat_3_label": "Regiones cubiertas"
        },
        "travel_styles": {
            "label": "ESTILOS DE VIAJE",
            "title": "Encuentra tu tipo de Marruecos.",
            "part_1": "Parte 1 de 2",
            "part_2": "Parte 2 de 2",
            "style_1": {
              "title": "Encuentros Culturales",
              "body": "Paseos privados por la medina, talleres de artesanos, visitas a familias locales, maravillas arquitectónicas e historias transmitidas de generación en generación. Para viajeros que quieren entender Marruecos, no solo fotografiarlo.",
              "footer": "Marrakech • Fez • Meknes • Chefchaouen • Rabat"
            },
            "style_2": {
              "title": "Escapadas al Desierto y al Atlas",
              "body": "Campamentos de lujo, kasbahs de montaña, paisajes dramáticos, observación de estrellas y la quietud de los vastos espacios abiertos de Marruecos. El desierto real, no la versión del folleto.",
              "footer": "Merzouga • Zagora • Valle del Draa • Ouarzazate"
            },
            "style_3": {
              "title": "Aventura y Exploración",
              "body": "Surf en la costa atlántica, caminatas por el Alto Atlas, excursiones por desfiladeros, paseos en quad, viajes todoterreno y experiencias activas diseñadas para viajeros curiosos que quieren estar en movimiento.",
              "footer": "Alto Atlas • Garganta del Todra • Essaouira • Cascadas de Ouzoud"
            },
            "style_4": {
              "title": "Retiros de Lujo Privados",
              "body": "Riads cuidadosamente seleccionados, estancias boutique refinadas, comodidad elegante y momentos hermosamente pausados durante todo el viaje. Marruecos sin fricciones.",
              "footer": "Riads de 5 estrellas • Guía privado • Acceso exclusivo • Bienestar"
            },
            "style_5": {
              "title": "Viajes Familiares",
              "body": "Experiencias cuidadosamente diseñadas que equilibran cultura, comodidad, flexibilidad y descubrimiento compartido para cada generación. Viajes que funcionan en la práctica, no solo en el papel.",
              "footer": "Apto para niños • Ritmo flexible • Todas las edades • Seguro y fácil"
            },
            "style_6": {
              "title": "Gastronomía y Vino",
              "body": "Cenas en azoteas, catas en mercados, experiencias culinarias en Fez y Marrakech, vinos marroquíes y los sabores que definen cada región y su gente.",
              "footer": "Clases de cocina • Tours por mercados • Cenas privadas • Rutas culinarias"
            }
        },
        "why_morocco": {
            "title": "Por qué Marruecos",
            "subtitle": "Un país que se siente tan profundamente como se ve.",
            "body_1": "Marruecos es un lugar de contrastes que se viven codo con codo. Medinas antiguas y diseño contemporáneo. Calma atlántica y silencio del desierto. Pueblos de montaña y vida urbana vibrante.",
            "body_2": "Esto es lo que permanece con los viajeros mucho tiempo después de regresar a casa.",
            "footer": "98% satisfacción del viajero • 3,200+ viajes"
        },
        "commitment": {
            "label": "Nuestro Compromiso",
            "subtitle": "No aspiraciones. El estándar mínimo que mantenemos en cada viaje, independientemente del presupuesto o del tamaño del grupo.",
            "item_1_title": "Una respuesta en 24 horas",
            "item_1_body": "Cada consulta recibe una respuesta personal, no una plantilla. Leemos lo que ha escrito y respondemos con algo que realmente lo refleje.",
            "item_2_title": "Una propuesta escrita desde cero",
            "item_2_body": "Su itinerario se construye específicamente para su grupo. No reciclamos viajes: cada propuesta es nueva, escrita en torno a lo que nos contó.",
            "item_3_title": "Transparencia total de precios",
            "item_3_body": "Presupuestos claros y detallados. Sin cargos ocultos, sin suplementos vagos, sin sorpresas a la llegada. Lo que presupuestamos es exactamente lo que paga.",
            "item_4_title": "Soporte sobre el terreno",
            "item_4_body": "Nuestro equipo está en Marruecos y localizable las 24 horas durante su viaje. Si algo cambia, lo solucionamos de inmediato.",
            "item_5_title": "Recomendaciones honestas, siempre",
            "item_5_body": "Sugerimos riads, guías y experiencias porque son genuinamente excepcionales, nunca por acuerdos de comisión."
        }
    }

    new_es_data = {}
    
    # 1. Start with manual fixes for the known nested structure
    new_es_data.update(manual_fixes)
    
    # 2. Add EN keys if we have a translation, otherwise use EN value
    for k, v in en_data.items():
        if k in manual_fixes:
            continue
        
        if isinstance(v, dict):
            # This shouldn't happen if I covered all nested objects in manual_fixes, 
            # but let's be safe.
            if k not in new_es_data:
                new_es_data[k] = {}
            for sub_k, sub_v in v.items():
                if sub_k not in new_es_data[k]:
                    es_val = pairs_dict.get(sub_k, sub_v)
                    new_es_data[k][sub_k] = es_val
        else:
            es_val = pairs_dict.get(k, v)
            new_es_data[k] = es_val

    # 3. Add all other ES-only keys
    for k, v in pairs_dict.items():
        # Skip if already in new_es_data (either flat or inside nested)
        if k in new_es_data:
            continue
        
        is_already_present = False
        for obj in new_es_data.values():
            if isinstance(obj, dict) and k in obj:
                is_already_present = True
                break
        
        if not is_already_present:
            # Check for mangled keys (e.g. contain "mangled" or too long/short)
            if len(k) > 500: # Probably mangled
                continue
            if '": "' in k: # Triple key remnants
                continue
            
            new_es_data[k] = v

    # 4. Final cleanup of values
    for k, v in new_es_data.items():
        if isinstance(v, str):
            # Fix common mangled values
            if '' in v:
                # Try to guess or just leave it?
                # For this task, I'll try to fix the specific one I saw
                if 'Taller de cerámica y mosaico (Zellige)' in v:
                    new_es_data[k] = "Taller de cerámica y mosaico (Zellige) con los maestros artesanos de Fez."
            
            # Remove triple key remnants in values
            if '": "' in v:
                 # Try to extract the last part which is usually the real value
                 parts = v.split('": "')
                 new_es_data[k] = parts[-1]

    # Save fixed file
    with open(es_path, 'w', encoding='utf-8') as f:
        json.dump(new_es_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
