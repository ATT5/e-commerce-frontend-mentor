"use client";
import { useState } from "react";
import classes from "./ProductSliderMobile.module.css";
import Image from "next/image";
import product1 from "../../../public/images/image-product-1.jpg";
import product2 from "../../../public/images/image-product-2.jpg";
import product3 from "../../../public/images/image-product-3.jpg";
import product4 from "../../../public/images/image-product-4.jpg";
import previous from "../../../public/images/icon-previous.svg";
import next from "../../../public/images/icon-next.svg";

const productImgs = [product1, product2, product3, product4];

const ProductSliderMobile = () => {
  const [img, setImg] = useState(0);

  const nextImghandler = function () {
    img === 3 ? setImg(0) : setImg(img + 1);
  };
  const previousImgHandler = function () {
    img === 0 ? setImg(3) : setImg(img - 1);
  };
  return (
    <div className={classes["img-container"]}>
      <Image
        alt="product"
        src={productImgs[img]}
        sizes="100vw"
        fill
        style={{
          objectFit: "fill",
        }}
      />
      <button className={classes["slider-btn"]} onClick={previousImgHandler}>
        <div className={classes.previous}>
          <Image
            src={previous}
            alt="previous"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </button>
      <button className={classes["slider-btn"]} onClick={nextImghandler}>
        <div className={classes.next}>
          <Image
            src={next}
            alt="next"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </button>
    </div>
  );
};

export default ProductSliderMobile;
