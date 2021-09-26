import { FC } from "react";
import styles from './IconSocial.scss'

type IconSocialProps = {
    href: string
}

const IconSocial: FC<IconSocialProps> = ({ children, href }) => {
  return (
    <a target="_blank" className={styles.iconStyles} href={href}>
        <div className="hoverBackground" />
        {children}
    </a>
  );
};

export default IconSocial;
