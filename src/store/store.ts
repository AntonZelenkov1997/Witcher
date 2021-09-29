import { createContext } from "react";
import politicsAndPrivacyModal from "./politicsAndPrivacyModal/politicsAndPrivacyModal";
import sliderProgressBar from "./sliderProgressBar/sliderProgressBar";
import thanksgivingBlock from "./thanksgivingBlock/thanksgivingBlock";
import validationForm from "./validationForm/validationForm";

const store = createContext({
  sliderProgressBar,
  politicsAndPrivacyModal,
  validationForm,
  thanksgivingBlock
});

export default store;
