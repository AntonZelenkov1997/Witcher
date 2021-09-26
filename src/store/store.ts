import { createContext } from "react";
import politicsAndPrivacyModal from "./politicsAndPrivacyModal/politicsAndPrivacyModal";
import sliderProgressBar from "./sliderProgressBar/sliderProgressBar";

const store = createContext({
  sliderProgressBar,
  politicsAndPrivacyModal,
});

export default store;
