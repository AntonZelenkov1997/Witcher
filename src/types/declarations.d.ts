declare module "*.scss" {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare enum buttonTypes {
  primary = 'primary',
  secondary = 'secondary'
} 

declare type sliderActorsType = {
  id: string,
  image: string,
  heroName: string,
  actorName: string,
  heroDesc: string
}

declare type shotsFromFilmType = Pick<sliderActorsType, "id" | "image">