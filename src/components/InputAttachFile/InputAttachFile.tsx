import { observer } from "mobx-react-lite";
import { FC, RefObject, useRef, useState } from "react";
import cs from "../../utils/composeStyles";
import useStore from "../../hooks/useStore/useStore";
import WarningInputBlock from "../WarningInputBlock/WarningInputBlock";
import styles from "./InputAttachFile.scss";

const InputAttachFile: FC= () => {
  const fileRef: RefObject<HTMLInputElement> = useRef(null);
  const [photoName, setPhotoName] = useState("Прикрепите файл");

  const loadFile = () => {
    if (fileRef.current?.files?.length) {
      setPhotoName(fileRef.current.files[0].name);
      onGetFile(fileRef.current.files[0])
    }
  };

  const { validationForm } = useStore();

  const dangerStyle: string = validationForm.GET_PROPERTY_ERROR("attachFile")
    ? ""
    : styles.dangerStyle;

  const onGetFile = (file: File) => validationForm.SET_VALIDATION("attachFile", file)

  return (
    <>
      <div className={styles.inputAttachFileContainer}>
        <div className={cs(styles.attachBlock, dangerStyle)}>
          <label
            className={styles.attachBlockText}
            htmlFor="attachBlockLabelId"
          >
            {photoName}
          </label>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <g clipPath="url(#clip0)">
                <path
                  d="M20.324 10.3309L12.8606 19.7275C11.1458 21.8864 7.9944 22.2477 5.83552 20.533C3.67664 18.8183 3.31529 15.6669 5.03001 13.508L12.4935 4.11133C13.5222 2.81615 15.4133 2.59931 16.7085 3.62802C18.0036 4.65673 18.2205 6.54787 17.1918 7.84305L11.5942 14.8905C11.2515 15.322 10.6207 15.3943 10.1892 15.0516C9.75773 14.7089 9.68539 14.0781 10.0281 13.6466L15.0037 7.38219L13.4376 6.13829L8.46198 12.4027C7.4314 13.7002 7.64776 15.5872 8.94528 16.6177C10.2428 17.6483 12.1297 17.432 13.1603 16.1344L18.7579 9.08695C20.4751 6.92494 20.1144 3.77913 17.9524 2.06191C15.7904 0.344702 12.6446 0.705407 10.9273 2.86742L3.4639 12.2641C1.05943 15.2914 1.56432 19.6947 4.59161 22.0991C7.6189 24.5036 12.0222 23.9987 14.4267 20.9714L21.8901 11.5748L20.324 10.3309Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" rx="1" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            onChange={loadFile}
            ref={fileRef}
            accept="image/png"
            id="attachBlockLabelId"
            placeholder=""
            title="Прикрепите файл"
            type="file"
            className={`inputForm ${styles.inputAttachFile} inputFormTextFile`}
          />
        </div>
      </div>
      <WarningInputBlock title="Поле не заполненно" disabled={validationForm.GET_PROPERTY_ERROR("attachFile")} />
    </>
  );
};

export default observer(InputAttachFile);
