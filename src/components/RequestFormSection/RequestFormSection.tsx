import { FC } from "react";
import Select, { OptionsOrGroups, StylesConfig } from "react-select";
import AppButton from "../AppButton/AppButton";

import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import InputAttachFile from "../InputAttachFile/InputAttachFile";
import InputCheckboxBlock from "../InputCheckboxBlock/InputCheckboxBlock";
import InputTel from "../InputTel/InputTel";
import InputTextArea from "../InputTextArea/InputTextArea";
import InputTextEmail from "../InputTextEmail/InputTextEmail";
import InputTextName from "../InputTextName/InputTextName";

import styles from "./RequestFormSection.scss";

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

const RequestFormSection: FC = () => {
  return (
    <section className={styles.requestFormSection}>
      <form className={styles.requestForm}>
        <h1 className={styles.heading}>Оставьте заявку</h1>

    <div className={styles.wrapperBlockContainer}>
        <div className={styles.leftBlockContainer}>
          <Select
            options={options}
            styles={customStyles}
            components={{ DropdownIndicator: CustomDropdownIndicator }}
          />

          <InputTextName
            containerClassName={styles.inputTextName}
            placeholder="Имя"
          />

          <div className={styles.wrapperFroEmailAndTel}>
            <InputTextEmail
              containerClassName={styles.inputTextEmail}
              placeholder="Email"
            />

            <InputTel containerClassName={styles.inputTel} />
          </div>

          <InputTextArea containerClassName={styles.inputTextArea} />

          <InputAttachFile containerClassName={styles.inputAttachFile} />

          <InputCheckboxBlock containerClassName={styles.inputCheckboxBlock} />

          <div className={styles.appButtonWrapper}>
            <AppButton type="primary" title="Оставить заявку" onClick={undefined} />
          </div>
        </div>

        <div className={styles.rightBlockContainer}>
            <div className={styles.infoBlock}>
              <p className={styles.topText}>Наша горячая линия</p>
              <p className={styles.bottomTextPhone}>8 800 38 23 112</p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.topText}>Главный офис</p>
              <p className={styles.bottomText}>г. Москва, Садовническая ул., 80</p>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.topText}>Часы работы</p>
              <p className={styles.bottomText}>Пн-Пт с 10:00 до 22:002</p>
            </div>
        </div>
        </div>
      </form>
    </section>
  );
};

export default RequestFormSection;
