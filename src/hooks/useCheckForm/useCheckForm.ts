// import useStore from "../useStore/useStore";

// type useCheckFormType = () => { checkForm: checkFormType };

// type checkFormType = () => {
//   formIsPassed: boolean;
//   objectErrors: validationErrorsObjectType;
// };

// type keysType = Array<keyof validationObjectType>;


// const useCheckForm: useCheckFormType = () => {
//   const { validationForm } = useStore();

//   const checkForm: checkFormType = () => {
//     let formIsPassed: boolean = true;

//     const keys: keysType = Object.keys(
//       validationForm.valiadtionObject
//     ) as keysType;

//     keys.forEach((key: keyof validationObjectType) => {
//       const isValidKey = validationForm.IS_VALIDATE(key);
//       // objectErrors[key] = isValidKey;


//       if (!isValidKey) formIsPassed = false;
//     });

//     return { formIsPassed, objectErrors };
//   };

//   return { checkForm };
// };

// export default useCheckForm;
