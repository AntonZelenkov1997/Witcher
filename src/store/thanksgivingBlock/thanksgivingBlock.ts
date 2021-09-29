import { makeAutoObservable } from "mobx";

type thanksgivingBlockType = {
  modalVisible: boolean;
  GET_IS_MODAL_VISIBLE: boolean;
  SET_MODAL_ACTIVE: () => void;
  SET_MODAL_INACTIVE: () => void;
};

const thanksgivingBlock: thanksgivingBlockType = makeAutoObservable({
  modalVisible: false,

  get GET_IS_MODAL_VISIBLE() {
    return this.modalVisible;
  },

  SET_MODAL_ACTIVE() {
    this.modalVisible = true;
  },

  SET_MODAL_INACTIVE() {
    this.modalVisible = false;
  },
} as thanksgivingBlockType);

export default thanksgivingBlock;
