import Image from "next/image";
import classes from "./ProductSlider.module.css";
import product1 from "../../../public/images/image-product-1.jpg";
import product2 from "../../../public/images/image-product-2.jpg";
import product3 from "../../../public/images/image-product-3.jpg";
import product4 from "../../../public/images/image-product-4.jpg";
import smallP1 from "../../../public/images/image-product-1-small.jpg";
import smallP2 from "../../../public/images/image-product-2-small.jpg";
import smallP3 from "../../../public/images/image-product-3-small.jpg";
import smallP4 from "../../../public/images/image-product-4-small.jpg";

const ProductSlider = () => {
  let active = false;
  return (
    <div className={classes.container}>
      <Image
        src={product1}
        style={{
          width: "100%",
          height: "450px",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        alt="product"
      />
      <div className={classes["small-img-container"]}>
        <Image
          src={smallP1}
          width={75}
          heigth={75}
          alt="product"
          className={
            active === "product1"
              ? `${classes["small-img"]} ${classes.active}`
              : classes["small-img"]
          }
          onClick={() => changeImgHandler(product1, "product1")}
        />
        <Image
          src={smallP2}
          width={75}
          heigth={75}
          alt="product"
          className={
            active === "product2"
              ? `${classes["small-img"]} ${classes.active}`
              : classes["small-img"]
          }
          onClick={() => changeImgHandler(product2, "product2")}
        />
        <Image
          src={smallP3}
          width={75}
          heigth={75}
          alt="product"
          className={
            active === "product3"
              ? `${classes["small-img"]} ${classes.active}`
              : classes["small-img"]
          }
          onClick={() => changeImgHandler(product3, "product3")}
        />
        <Image
          src={smallP4}
          width={75}
          heigth={75}
          alt="product"
          className={
            active === "product4"
              ? `${classes["small-img"]} ${classes.active}`
              : classes["small-img"]
          }
          onClick={() => changeImgHandler(product4, "product4")}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
