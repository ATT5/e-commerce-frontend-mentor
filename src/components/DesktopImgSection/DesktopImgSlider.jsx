"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./DesktopImgSlider.module.css";
import product1 from "../../../public/images/image-product-1.jpg";
import product2 from "../../../public/images/image-product-2.jpg";
import product3 from "../../../public/images/image-product-3.jpg";
import product4 from "../../../public/images/image-product-4.jpg";
import smallP1 from "../../../public/images/image-product-1-small.jpg";
import smallP2 from "../../../public/images/image-product-2-small.jpg";
import smallP3 from "../../../public/images/image-product-3-small.jpg";
import smallP4 from "../../../public/images/image-product-4-small.jpg";
import previous from "../../../public/images/icon-previous.svg";
import next from "../../../public/images/icon-next.svg";
import closeIcon from "../../../public/images/icon-close.svg";

const productImgs = [product1, product2, product3, product4];

const DesktopImgSlider = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    index === 3 ? setIndex(0) : setIndex(index + 1);
  };

  const previousImg = () => {
    index === 0 ? setIndex(3) : setIndex(index - 1);
  };
  const openSlider = () => {
    setOpen(true);
  };
  const closeSlider = () => {
    setOpen(false);
  };

  const changeImgHandler = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div className={classes.container}>
        <Image
          src={productImgs[index]}
          style={{
            width: "100%",
            height: "450px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          alt="product"
          onClick={openSlider}
        />
        <div className={classes["small-img-container"]}>
          <Image
            src={smallP1}
            width={75}
            heigth={75}
            alt="product"
            className={
              index === 0
                ? `${classes["small-img"]} ${classes.active}`
                : classes["small-img"]
            }
            onClick={() => changeImgHandler(0)}
          />
          <Image
            src={smallP2}
            width={75}
            heigth={75}
            alt="product"
            className={
              index === 1
                ? `${classes["small-img"]} ${classes.active}`
                : classes["small-img"]
            }
            onClick={() => changeImgHandler(1)}
          />
          <Image
            src={smallP3}
            width={75}
            heigth={75}
            alt="product"
            className={
              index === 2
                ? `${classes["small-img"]} ${classes.active}`
                : classes["small-img"]
            }
            onClick={() => changeImgHandler(2)}
          />
          <Image
            src={smallP4}
            width={75}
            heigth={75}
            alt="product"
            className={
              index === 3
                ? `${classes["small-img"]} ${classes.active}`
                : classes["small-img"]
            }
            onClick={() => changeImgHandler(3)}
          />
        </div>
      </div>
      {/* //////////overlay images/////////// */}
      {open && (
        <div className={classes.overlay}>
          <Image
            src={closeIcon}
            width={20}
            height={20}
            alt="close icon"
            style={{
              fill: "#fff",
            }}
            className={classes["close-icon"]}
            onClick={closeSlider}
          />
          <div className={classes["slider-container"]}>
            <Image
              src={productImgs[index]}
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              alt="product"
            />
            <div className={classes["btn-container"]}>
              <button className={classes.btn} onClick={previousImg}>
                <Image
                  src={previous}
                  width={10}
                  height={10}
                  alt="previous btn"
                />
              </button>
              <button className={classes.btn} onClick={nextImg}>
                <Image src={next} width={10} height={10} alt="next btn" />
              </button>
            </div>
            <div className={classes["small-img-container-slider"]}>
              <Image
                src={smallP1}
                width={75}
                heigth={75}
                alt="product"
                className={
                  index === 0
                    ? `${classes["small-img"]} ${classes.active}`
                    : classes["small-img"]
                }
                onClick={() => changeImgHandler(0)}
              />
              <Image
                src={smallP2}
                width={75}
                heigth={75}
                alt="product"
                className={
                  index === 1
                    ? `${classes["small-img"]} ${classes.active}`
                    : classes["small-img"]
                }
                onClick={() => changeImgHandler(1)}
              />
              <Image
                src={smallP3}
                width={75}
                heigth={75}
                alt="product"
                className={
                  index === 2
                    ? `${classes["small-img"]} ${classes.active}`
                    : classes["small-img"]
                }
                onClick={() => changeImgHandler(2)}
              />
              <Image
                src={smallP4}
                width={75}
                heigth={75}
                alt="product"
                className={
                  index === 3
                    ? `${classes["small-img"]} ${classes.active}`
                    : classes["small-img"]
                }
                onClick={() => changeImgHandler(3)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopImgSlider;
