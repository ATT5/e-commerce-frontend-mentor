import Image from "next/image";
import classes from "./MobileMenu.module.css";
import closeIcon from "../../../public/images/icon-close.svg";

const MobileMenu = ({ onClick }) => {
  return (
    <>
      <div className={classes["menu-container"]} onClick={onClick} />
      <div className={classes["mobile-menu"]}>
        <div className={classes["close-icon"]} onClick={onClick}>
          <Image
            src={closeIcon}
            alt="menu icon"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
