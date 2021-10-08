import {FC} from "react";
import AsyncSelect from 'react-select/async';

import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import useStore from "../../hooks/useStore/useStore";
import {observer} from "mobx-react-lite";
import {customStyles, customStylesDanger, options} from "../../utils/InputSelectStyles";

type optionsTypes = {
    readonly value: string;
    readonly label: string;
};


type customStylesBehaviorType = (
    type: "default" | "danger"
) => typeof customStyles;

const customStylesBehavior: customStylesBehaviorType = (type) => {
    if (type === "default") return customStyles;
    if (type === "danger") return customStylesDanger;
    return customStyles
};

const loadOptions = (inputValue: string, callback: any) => {
    console.log(inputValue, callback)
}

const InputSelect: FC = () => {
    const {validationForm} = useStore();
    const onChange = (selectedValue: optionsTypes | any) => validationForm.SET_VALIDATION("city", selectedValue.label)

    return (
        <>
            <AsyncSelect
                defaultOptions={options}
                onInputChange={() => {
                    console.log('change1')
                }}
                placeholder="Выберете город"
                loadOptions={loadOptions}
                onChange={onChange}
                styles={validationForm.GET_PROPERTY_ERROR("city") ? customStylesBehavior("default") : customStylesBehavior("danger")}
                components={{DropdownIndicator: CustomDropdownIndicator}}
            />
            <WarningInputBlock
                title="Город не выбран"
                disabled={validationForm.GET_PROPERTY_ERROR("city")}
            />
        </>
    );
};

export default observer(InputSelect);
