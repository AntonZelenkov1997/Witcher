import { FC, } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

type AppButtonProps = {
    type: keyof typeof buttonTypes,
    title: string
}

const AppButton: FC<AppButtonProps> = ({type, title}) => {

    if (type === 'primary') return <PrimaryButton title={title} />
    if (type === 'secondary') return <SecondaryButton title={title} />
    return null
}

export default AppButton;