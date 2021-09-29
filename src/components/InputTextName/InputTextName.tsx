import { ChangeEventHandler, FC } from "react";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import { observer } from "mobx-react-lite";

type InputTextNameProps = {
  containerClassName?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>
};

const InputTextName: FC<InputTextNameProps> = ({
  containerClassName,
  placeholder,
  onChange
}) => {

  const { validationForm } = useStore();

  const ccn = containerClassName ?? ""

  const dangerStyle = validationForm.GET_PROPERTY_ERROR('name') ? "" : "inputForm_danger"

  return (
    <>
      <div className={ccn}>
        <input onChange={onChange} placeholder={placeholder} type="text" className={`inputForm ${dangerStyle}`} />
      </div>

      <WarningInputBlock title="Поле не заполненно" disabled={validationForm.GET_PROPERTY_ERROR('name')} />
    </>
  );
};

export default observer(InputTextName);
