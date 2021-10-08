import { makeAutoObservable, reaction } from "mobx";
import {
  bodyOverflowActive,
  bodyOverflowInactive,
} from "../../utils/bodyOverflow";

type politicsAndPrivacyModalType = {
  modalIsActive: boolean | null;
  GET_MODAL_IS_ACTIVE: boolean;
  SET_MODAL_ACTIVE: () => void;
  SET_MODAL_INACTIVE: () => void;
};

const politicsAndPrivacyModal = makeAutoObservable({
  modalIsActive: null,
  get GET_MODAL_IS_ACTIVE() {
    return this.modalIsActive;
  },
  SET_MODAL_ACTIVE() {
    this.modalIsActive = true;
  },
  SET_MODAL_INACTIVE() {
    this.modalIsActive = false;
  },
} as politicsAndPrivacyModalType);

reaction(
  () => politicsAndPrivacyModal.GET_MODAL_IS_ACTIVE,
  (GET_MODAL_IS_ACTIVE) => {
    if (GET_MODAL_IS_ACTIVE) {
      return bodyOverflowActive();
    }

    return bodyOverflowInactive();
  }
);

export default politicsAndPrivacyModal;
