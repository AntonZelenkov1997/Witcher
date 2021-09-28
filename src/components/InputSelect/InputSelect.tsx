import { FC } from "react";
import Select, { OptionsOrGroups, StylesConfig } from "react-select";

import styles from "./InputSelect.scss";
import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";

type optionsTypes = {
  readonly value: string;
  readonly label: string;
};

const options: OptionsOrGroups<Array<optionsTypes>, any> = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles: StylesConfig<typeof options, true> = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
    backgroundColor: state.isFocused ? "red" : "none",
  }),

  input: (provided, state) => ({
    ...provided,
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  }),

  placeholder: (provided, state) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
    opacity: 0.4,
  }),

  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
  }),

  control: (provided, state) => ({
    ...provided,
    border: "none",
    backgroundColor: "#2F2F2F",
    width: "100%",
    borderRadius: "none",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "0 20px",
  }),

  indicatorsContainer: (provided, state) => {
    const { menuIsOpen } = state.selectProps;

    if (menuIsOpen)
      return {
        ...provided,

        "& svg": {
          backgroundColor: "#2F2F2F",
          transform: "rotate(180deg)",
          transition: "transform .2s ease-in-out",
        },
      };

    return {
      ...provided,

      "& svg": {
        backgroundColor: "#2F2F2F",
        transition: "transform .2s ease-in-out",
      },
    };
  },

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),

  singleValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    padding: "18px 20px",
  }),
};

const InputSelect: FC = () => {
  return (
    <>
      <Select
        placeholder="Выберете город"
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
      <WarningInputBlock title="Город не выбран" disabled={true} />
    </>
  );
};

export default InputSelect;
