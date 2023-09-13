"use client";
import { useState } from "react";
import Image from "next/image";
import classes from "./Navbar.module.css";
import cartIcon from "../../../public/images/icon-cart.svg";
import avatar from "../../../public/images/avatar.png";
import menuMobile from "../../../public/images/icon-menu.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/redux/store";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const cart = useSelector((state) => state.cart.show);
  const dispatch = useDispatch();

  const hideHandler = () => {
    setMobileMenu(false);
  };

  const cartHanlder = () => {
    dispatch(cartAction.showCart());
  };

  const navClasses = mobileMenu
    ? classes.nav
    : `${classes.nav} ${classes.gray} `;

  return (
    <>
      {mobileMenu && <MobileMenu onClick={hideHandler} />}
      <nav className={navClasses}>
        <div className={classes.menu}>
          <div
            className={classes["icon-menu"]}
            onClick={() => {
              setMobileMenu(true);
              dispatch(cartAction.hideCart());
            }}
          >
            <Image
              src={menuMobile}
              alt="menu icon"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h2>sneakers</h2>
          <ul className={classes.links}>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes.cart}>
          <div className={classes["icon-cart"]}>
            <Image
              src={cartIcon}
              alt="cart"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
              }}
              onClick={cartHanlder}
            />
          </div>
          <div className={`${classes["icon-cart"]} ${classes.avatar}`}>
            <Image
              src={avatar}
              alt="avatar"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </nav>
      {cart && <CartItems />}
    </>
  );
};

export default Navbar;
