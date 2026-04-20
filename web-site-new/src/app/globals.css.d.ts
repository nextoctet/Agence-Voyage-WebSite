// CSS Module declaration for globals.css
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}