import React from "react";
import SearchBar from "../assets/SearchBar";
import Fruits from "../assets/fruits.svg";
import Oil from "../assets/cooking.svg";
import Meat from "../assets/meat.svg";
import Bakery from "../assets/bakery.svg";
import Dairy from "../assets/dairy.svg";
import Beverages from "../assets/beverages.svg";

const Explore = () => {
  return (
    // To prevent hiding of items from bottom nav
    <div className="pb-24">
      <div className="text-center mx-1 font-extrabold text-2xl">
        Find Products
      </div>
      {/* Search Bar */}
      <SearchBar />
      {/* Card Container */}
      <div className="flex justify-evenly items-center flex-wrap mx-2 mb-2">
        {/* Card Item */}
        <div className="card bg-[#53B1751A] border-[#53B175B2] m-2">
          <img
            className="size-24"
            src={Fruits}
            alt="Fresh Fruits & Vegetables"
          />
          <p className="font-bold text-sm max-w-[92px] text-center">
            Fresh Fruits & Vegetables
          </p>
        </div>
        {/* Card Item */}
        <div className="card bg-[#F8A44C1A] border-[#F8A44CB2] m-2">
          <img className="size-24" src={Oil} alt="Cooking Oil & Ghee" />
          <p className="font-bold text-sm max-w-[90px] text-center">
            Cooking Oil & Ghee
          </p>
        </div>
        {/* Card Item */}
        <div className="card bg-[#F7A59340] border-[#F7A593] m-2">
          <img className="size-24" src={Meat} alt="Meat & Fish" />
          <p className="font-bold text-sm text-center">Meat & Fish</p>
        </div>
        {/* Card Item */}
        <div className="card bg-[#D3B0E040] border-[#D3B0E0] m-2">
          <img className="size-24" src={Bakery} alt="Bakery & Snacks" />
          <p className="font-bold text-sm  text-center">Bakery & Snacks</p>
        </div>
        {/* Card Item */}
        <div className="card bg-[#FDE59840] border-[#FDE598] m-2">
          <img className="size-24" src={Dairy} alt="Dairy & Eggs" />
          <p className="font-bold text-sm text-center">Dairy & Eggs</p>
        </div>
        {/* Card Item */}
        <div className="card bg-[#B7DFF540] border-[#B7DFF5] m-2">
          <img className="size-24" src={Beverages} alt="Beverages" />
          <p className="font-bold text-sm text-center">Beverages</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
