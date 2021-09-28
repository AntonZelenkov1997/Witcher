import { makeAutoObservable } from "mobx";

type valiadtionObjectType = {
  city: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  textArea: string | null;
  attachFile: object | null;
  checkboxPrivacy: boolean;
};

type validationFormType = {
  valiadtionObject: valiadtionObjectType;
  GET_VALIDATION: (
    key: keyof valiadtionObjectType
  ) => valiadtionObjectType[keyof valiadtionObjectType];
  SET_VALIDATION: <T extends keyof valiadtionObjectType>(
    key: T,
    value: valiadtionObjectType[T]
  ) => void;
};

const validationForm: validationFormType = makeAutoObservable({
  valiadtionObject: {
    city: null,
    name: null,
    email: null,
    phone: null,
    textArea: null,
    attachFile: null,
    checkboxPrivacy: false,
  },

  GET_VALIDATION(key) {
    return this.valiadtionObject[key];
  },

  SET_VALIDATION(key, value) {
    this.valiadtionObject[key] = value;
  },
} as validationFormType);

export default validationForm;
