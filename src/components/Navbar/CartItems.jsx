"use client";
import Image from "next/image";
import item from "../../../public/images/image-product-1-small.jpg";
import deleteIcon from "../../../public/images/icon-delete.svg";
import classes from "./CartItems.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { cartAction } from "@/redux/store";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartbill = useSelector((state) => state.cart.bill);
  const dispatch = useDispatch();

  const cart = cartItems !== 0;
  const deleteHandler = () => dispatch(cartAction.delete());

  const checkoutHandler = () => {
    alert("Your order has been sent");
    dispatch(cartAction.delete());
  };

  return (
    <div className={classes["cart-items"]}>
      <h3 className={classes["cart-title"]}>Cart</h3>
      {cart && (
        <>
          <section className={classes.info}>
            <Image
              src={item}
              width={50}
              height={50}
              alt="product"
              className={classes["item-img"]}
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {cartItems} =
                <span className={classes.price}> ${cartbill}.00</span>
              </p>
            </div>
            <Image
              src={deleteIcon}
              width={15}
              height={18}
              alt="delete"
              className={classes.delete}
              onClick={deleteHandler}
            />
          </section>
          <button className={classes.btn} onClick={checkoutHandler}>
            Checkout
          </button>
        </>
      )}
      {!cart && <p className={classes.empty}>Your cart is empty</p>}
    </div>
  );
};

export default CartItems;
