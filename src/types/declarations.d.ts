declare module "*.scss" {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare enum buttonTypes {
  primary = "primary",
  secondary = "secondary",
}

declare type sliderActorsType = {
  id: string;
  image: string;
  heroName: string;
  actorName: string;
  heroDesc: string;
};

declare type shotsFromFilmType = Pick<sliderActorsType, "id" | "image">;

declare type AppButtonProps = {
  type: keyof typeof buttonTypes;
  title: string;
  onClick?: () => void;
  typeButton: "submit" | "button";
};

declare type ButtonProps = Pick<
  AppButtonProps,
  "title" | "onClick" | "typeButton"
>;

declare type validationObjectType = {
  city: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  textArea: string | null;
  attachFile: File | null;
  checkboxPrivacy: boolean;
};
