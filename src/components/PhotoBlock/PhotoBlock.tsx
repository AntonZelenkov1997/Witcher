import { FC } from "react";
import styles from "./PhotoBlock.scss";

type PhotoBlockProps = {
  image: string;
  index: number
};

const PhotoBlock: FC<PhotoBlockProps> = ({ image, index }) => {
  return (
      <div className={styles.photoBlock}>
          <img className={styles.image} src={image} alt="Not found" />
      </div>
  );
};

export default PhotoBlock;
