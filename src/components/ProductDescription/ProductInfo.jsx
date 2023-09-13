"use client";
import classes from "./ProductInfo.module.css";
import minus from "../../../public/images/icon-minus.svg";
import plus from "../../../public/images/icon-plus.svg";
import cart from "../../../public/images/white-cart.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "@/redux/store";
const ProductInfo = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dsipatch = useDispatch();

  const addHandler = () => {
    dsipatch(cartAction.add());
  };

  const removeHandler = () => {
    dsipatch(cartAction.remove());
  };

  const addCartHandler = () => {
    dsipatch(cartAction.addCart());
  };
  return (
    <section className={classes["info-container"]}>
      <small className={classes.small}>SNEAKER COMPANY</small>
      <h2 className={classes.title}>Fall Limited Edition Sneakers</h2>
      <p className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={classes["price-container"]}>
        <h2 className={classes["new-price"]}>
          $125.00 <span className={classes.discount}>50%</span>
        </h2>

        <small className={classes.price}>$250.00</small>
      </div>
      <div className={classes["btn-container"]}>
        <div className={classes.counter}>
          <button className={classes.minus} onClick={removeHandler}>
            <Image src={minus} width={15} height={5} alt="minus" />
          </button>
          <p className={classes.count}>{cartItems}</p>
          <button className={classes.plus} onClick={addHandler}>
            <Image src={plus} width={15} height={15} alt="plus" />
          </button>
        </div>
        <button className={classes.add} onClick={addCartHandler}>
          <Image
            src={cart}
            width={20}
            height={20}
            alt="cart"
            className={classes.cart}
          />
          <p>Add to cart</p>
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
