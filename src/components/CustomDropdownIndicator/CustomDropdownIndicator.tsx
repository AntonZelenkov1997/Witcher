import { ComponentType } from "react";
import { components, DropdownIndicatorProps, GroupBase, OptionsOrGroups } from "react-select";

const { DropdownIndicator } = components;

type CustomDropdownIndicatorType = ComponentType<DropdownIndicatorProps<OptionsOrGroups<{}[], any>, true, GroupBase<OptionsOrGroups<{}[], any>>>> | null | undefined

const CustomDropdownIndicator: CustomDropdownIndicatorType = (props) => {
  return (
    <DropdownIndicator {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6062 7.80009L19.6041 7.80015C19.4562 7.80436 19.3127 7.86309 19.2056 7.9688L11.9995 14.8463L4.79338 7.96878C4.68226 7.85919 4.5338 7.80357 4.38458 7.8015L4.38458 7.80145L4.37999 7.80149C4.14905 7.80359 3.93719 7.93638 3.84455 8.14857L3.84454 8.14857L3.84353 8.15095C3.75246 8.36713 3.80735 8.61186 3.97838 8.77155L11.5922 16.0382C11.8182 16.2539 12.1808 16.2539 12.4068 16.0382L20.0202 8.77194C20.194 8.6114 20.2482 8.36115 20.1548 8.14501L20.154 8.14335C20.059 7.92882 19.8406 7.79588 19.6062 7.80009Z"
          fill="white"
          stroke="white"
          strokeWidth="0.4"
        />
      </svg>
    </DropdownIndicator>
  );
};

export default CustomDropdownIndicator;
