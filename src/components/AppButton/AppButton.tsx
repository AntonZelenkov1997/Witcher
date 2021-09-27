import { FC } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

type AppButtonProps = {
  type: keyof typeof buttonTypes;
  title: string;
  onClick: undefined | (() => void);
};

const AppButton: FC<AppButtonProps> = ({ type, title, onClick }) => {
  if (type === "primary")
    return <PrimaryButton title={title} onClick={onClick} />;
  if (type === "secondary")
    return <SecondaryButton title={title} onClick={onClick} />;
  return null;
};

export default AppButton;
