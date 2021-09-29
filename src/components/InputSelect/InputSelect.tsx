import { FC } from "react";
import Select, { OptionsOrGroups } from "react-select";

import styles from "./InputSelect.scss";
import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import useStore from "../../hooks/useStore/useStore";
import { observer } from "mobx-react-lite";
import { customStyles, customStylesDanger, options } from "../../helpers/InputSelectStyles";

type optionsTypes = {
  readonly value: string;
  readonly label: string;
};

type InputSelectProps = {
  onChange: (selectedValue: optionsTypes | any) => void;
};


type customStylesBehaviorType = (
  type: "default" | "danger"
) => typeof customStyles;

const customStylesBehavior: customStylesBehaviorType = (type) => {
  if (type === "default") return customStyles;
  if (type === "danger") return customStylesDanger;
  return customStyles
};

const InputSelect: FC<InputSelectProps> = ({ onChange }) => {
  const { validationForm } = useStore();

  return (
    <>
      <Select
        placeholder="Выберете город"
        options={options}
        onChange={onChange}
        styles={validationForm.GET_PROPERTY_ERROR("city") ? customStylesBehavior("default") : customStylesBehavior("danger")}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
      <WarningInputBlock
        title="Город не выбран"
        disabled={validationForm.GET_PROPERTY_ERROR("city")}
      />
    </>
  );
};

export default observer(InputSelect);
