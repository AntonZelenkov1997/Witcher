declare module "*.scss" {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}