import { makeAutoObservable } from "mobx";

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

export default politicsAndPrivacyModal;
