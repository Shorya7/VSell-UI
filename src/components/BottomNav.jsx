import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

const BottomNav = () => {
  const [activeButton, setActiveButton] = useState("/"); //To track to active state tab

  return (
    // Menu Container
    <div className="flex items-center justify-between px-1 min-[410px]:justify-evenly fixed bottom-0 left-0 z-50 w-full h-20 bg-white rounded-t-xl shadow-2xl drop-shadow-2xl">
      {/* Menu Item */}
      <Link to="/">
        <button
          onClick={() => setActiveButton("/")}
          className={`flex justify-center flex-col items-center max-[335px]:w-14 max-[410px]:w-16 w-20 h-16 hover:bg-hover-btn rounded-lg transition duration-200 ${
            activeButton === "/" ? "text-primary-font" : "text-primary-btn"
          }`}
        >
          <IoStorefrontOutline className=" max-[335px]:text-xl text-2xl" />
          <p className="mt-1 font-bold max-[410px]:text-xs text-sm">Shop</p>
        </button>
      </Link>
      {/* Menu Item */}
      <Link to="/explore">
        <button
          onClick={() => setActiveButton("/explore")}
          className={`flex justify-center flex-col items-center max-[335px]:w-14 max-[410px]:w-16 w-20 h-16 hover:bg-hover-btn rounded-lg transition duration-200 ${
            activeButton === "/explore"
              ? "text-primary-font"
              : "text-primary-btn"
          }`}
        >
          <MdManageSearch className="max-[335px]:text-xl text-2xl" />
          <p className="mt-1 font-bold max-[410px]:text-xs text-sm">Explore</p>
        </button>
      </Link>
      {/* Menu Item */}
      <Link to="/cart">
        <button
          onClick={() => setActiveButton("/cart")}
          className={`flex justify-center flex-col items-center max-[335px]:w-14 max-[410px]:w-16 w-20 h-16 hover:bg-hover-btn rounded-lg transition duration-200 ${
            activeButton === "/cart" ? "text-primary-font" : "text-primary-btn"
          }`}
        >
          <PiShoppingCartSimpleBold className="max-[335px]:text-xl text-2xl" />
          <p className="mt-1 font-bold max-[410px]:text-xs text-sm">Cart</p>
        </button>
      </Link>
      {/* Menu Item */}
      <Link to="/favourite">
        <button
          onClick={() => setActiveButton("/favourite")}
          className={`flex justify-center flex-col items-center max-[335px]:w-14 max-[410px]:w-16 w-20 h-16 hover:bg-hover-btn rounded-lg transition duration-200 ${
            activeButton === "/favourite"
              ? "text-primary-font"
              : "text-primary-btn"
          }`}
        >
          <FaRegHeart className="max-[335px]:text-xl text-2xl " />
          <p className="mt-1 font-bold max-[410px]:text-xs text-sm">
            Favourite
          </p>
        </button>
      </Link>
      {/* Menu Item */}
      <Link to="/my-account">
        <button
          onClick={() => setActiveButton("/my-account")}
          className={`flex justify-center flex-col items-center max-[335px]:w-14 max-[410px]:w-16 w-20 h-16 hover:bg-hover-btn rounded-lg transition duration-200 ${
            activeButton === "/my-account"
              ? "text-primary-font"
              : "text-primary-btn"
          }`}
        >
          <MdOutlinePersonOutline className="max-[335px]:text-xl text-2xl" />
          <p className="mt-1 font-bold max-[410px]:text-xs text-sm">Account</p>
        </button>
      </Link>
    </div>
  );
};

export default BottomNav;
