import { makeAutoObservable } from "mobx";

type validationErrorsObjectType = Record<keyof validationObjectType, boolean>;

type validationFormType = {
  validationObject: validationObjectType;
  GET_VALIDATION: (
    key: keyof validationObjectType
  ) => validationObjectType[keyof validationObjectType];
  SET_VALIDATION: <T extends keyof validationObjectType>(
    key: T,
    value: validationObjectType[T]
  ) => void;
  IS_VALIDATE: (key: keyof validationObjectType) => boolean;

  objectErrors: validationErrorsObjectType;
  SET_PROPERTY_ERROR: (key: keyof validationObjectType, value: boolean) => void;
  CHECK_FORM_ERRORS: () => void;
  GET_FORM_IS_PASSED: boolean;
  GET_PROPERTY_ERROR: <K extends keyof validationErrorsObjectType>(
    key: K
  ) => validationErrorsObjectType[K];
  SET_CLEAR_FORM: () => void
};

const initialValidationObject: validationObjectType = {
  city: null,
  name: null,
  email: null,
  phone: null,
  textArea: null,
  attachFile: null,
  checkboxPrivacy: false,
};

const validationForm: validationFormType = makeAutoObservable({
  validationObject: { ...initialValidationObject },

  objectErrors: {
    city: true,
    name: true,
    email: true,
    phone: true,
    textArea: true,
    attachFile: true,
    checkboxPrivacy: true,
  },

  GET_VALIDATION(key) {
    return this.objectErrors[key];
  },

  IS_VALIDATE(key) {
    if (key === "phone") {
      return this.validationObject[key]?.length === 11;
    }

    return Boolean(this.validationObject[key]);
  },

  SET_VALIDATION(key, value) {
    this.validationObject[key] = value;
  },

  SET_PROPERTY_ERROR(key, value) {
    this.objectErrors[key] = value;
  },

  GET_PROPERTY_ERROR(key) {
    return this.objectErrors[key];
  },

  CHECK_FORM_ERRORS() {
    const keys: Array<keyof validationObjectType> = Object.keys(
      this.validationObject
    ) as Array<keyof validationObjectType>;

    keys.forEach((key) => {
      const inputIsValid = this.IS_VALIDATE(key);

      this.SET_PROPERTY_ERROR(key, inputIsValid);
    });
  },

  get GET_FORM_IS_PASSED() {
    let isPassed: boolean = true;
    let key: keyof validationErrorsObjectType;

    for (key in this.objectErrors) {
      if (!this.objectErrors[key]) {
        isPassed = false;
        break;
      }
    }

    return isPassed;
  },

  SET_CLEAR_FORM() {
    this.validationObject = { ...initialValidationObject };
  },
} as validationFormType);

export default validationForm;
