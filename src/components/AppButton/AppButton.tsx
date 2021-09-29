import { FC } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const AppButton: FC<AppButtonProps> = ({ type, title, onClick = undefined, typeButton = "button" }) => {
  if (type === "primary")
    return <PrimaryButton title={title} onClick={onClick} typeButton={typeButton} />;
  if (type === "secondary")
    return <SecondaryButton title={title} onClick={onClick} typeButton={typeButton} />;
  return null;
};

export default AppButton;
