import { OptionsOrGroups, StylesConfig } from "react-select";

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

  input: (provided) => ({
    ...provided,
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  }),

  placeholder: (provided) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
    opacity: 0.15,
    transition: "background-color .2s ease-in-out",
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    transition: "background-color .2s ease-in-out",
  }),

  control: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "#2F2F2F",
    width: "100%",
    borderRadius: "none",
    transition: "background-color .2s ease-in-out",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0 20px",
  }),

  indicatorsContainer: (provided, state) => {
    const { menuIsOpen } = state.selectProps;

    if (menuIsOpen)
      return {
        ...provided,
        backgroundColor: "#2F2F2F",
        transition: "background-color .2s ease-in-out",

        "& svg": {
          backgroundColor: "#2F2F2F",
          transform: "rotate(180deg)",
          transition: "transform .2s ease-in-out, background-color .2s ease-in-out",
        },
      };

    return {
      ...provided,
      backgroundColor: "#2F2F2F",
      transition: "background-color .2s ease-in-out",

      "& svg": {
        backgroundColor: "#2F2F2F",
        transition: "transform .2s ease-in-out, background-color .2s ease-in-out",
      },
    };
  },

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  singleValue: (provided) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
    transition: "background-color .2s ease-in-out",
  }),

  valueContainer: (provided) => ({
    ...provided,
    backgroundColor: "#2F2F2F",
    padding: "18px 20px",
    transition: "background-color .2s ease-in-out",
  }),
};


















const customStylesDanger: typeof customStyles = {
  ...customStyles,
  control: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "var(--var-input-danger)",
    width: "100%",
    borderRadius: "none",
    transition: "background-color .2s ease-in-out",
  }),

  valueContainer: (provided) => ({
    ...provided,
    backgroundColor: "var(--var-input-danger)",
    padding: "18px 20px",
    transition: "background-color .2s ease-in-out",
  }),

  placeholder: (provided) => ({
    ...provided,
    backgroundColor: "var(--var-input-danger)",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
    opacity: 0.15,
    transition: "background-color .2s ease-in-out",
  }),

  singleValue: (provided) => ({
    ...provided,
    transition: "background-color .2s ease-in-out",
    backgroundColor: "var(--var-input-danger)",
    fontFamily: "Futura PT",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  }),

  indicatorsContainer: (provided, state) => {
    const { menuIsOpen } = state.selectProps;

    if (menuIsOpen)
      return {
        ...provided,

        backgroundColor: "var(--var-input-danger)",
        transition: "background-color .2s ease-in-out",

        "& svg": {
          backgroundColor: "var(--var-input-danger)",
          transform: "rotate(180deg)",
          transition: "transform .2s ease-in-out, background-color .2s ease-in-out",
        },
      };

    return {
      ...provided,
      backgroundColor: "var(--var-input-danger)",
      transition: "background-color .2s ease-in-out",

      "& svg": {
        backgroundColor: "var(--var-input-danger)",
        transition: "transform .2s ease-in-out, background-color .2s ease-in-out",
      },
    };
  },
};

export { customStyles, customStylesDanger, options };
