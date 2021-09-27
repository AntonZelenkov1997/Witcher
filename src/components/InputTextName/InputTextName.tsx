import { FC } from "react";

type InputTextNameProps = {
    containerClassName?: string,
    placeholder: string
}

const InputTextName: FC<InputTextNameProps> = ({containerClassName, placeholder}) => {
    return (
        <div className={containerClassName}>
            <input placeholder={placeholder} type="email" className="inputForm" />
        </div>
    )
}

export default InputTextName;