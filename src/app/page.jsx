"use client";
import DesktopImgSlider from "@/components/DesktopImgSection/DesktopImgSlider";
import Navbar from "@/components/Navbar/Navbar";
import ProductInfo from "@/components/ProductDescription/ProductInfo";
import ProductSliderMobile from "@/components/ProductImg/ProductSliderMobile";
import { cartAction } from "@/redux/store";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const hideCart = () => {
    dispatch(cartAction.hideCart());
  };

  return (
    <>
      <Navbar />
      <div onClick={hideCart}>
        <ProductSliderMobile />
        <div className="page-content">
          <DesktopImgSlider />
          <ProductInfo />
        </div>
      </div>
    </>
  );
};

export default HomePage;
