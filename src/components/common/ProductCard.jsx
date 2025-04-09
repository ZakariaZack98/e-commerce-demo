import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AddToCart, ExistanceInCart } from "../../utils/Utils";

const ProductCard = ({
  pid,
  imgUrl,
  name,
  retailPrice,
  preferredPrice,
  buyHandler,
  pageLink = "/error",
}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  return (
    <div
      className="w-[21dvw] p-5 rounded-xl bg-white dark:bg-gray-700 dark:text-lightPink font-dmSans mx-auto shadow-xl cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        navigate(pageLink);
      }}
    >
      <picture>
        <img
          src={imgUrl}
          className=" h-[250px] mx-auto object-cover object-center "
        />
      </picture>
      <div className="textSec mt-1">
        <h3 className="text-2xl font-semibold max-h-25px">{name}</h3>
        <p>
          Retail: <strike>{retailPrice}$</strike>
        </p>
        <p>Preferred: {preferredPrice}$</p>
        <div className="btnDiv flex flex-col gap-y-0.5">
          <Button
            clickHandler={(e) => {
              e.stopPropagation();
              return; //buying function goes here
            }}
            label={"Buy Now"}
            id={pid}
          />
          <Button
            colorClass={`${
              ExistanceInCart(cart, pid) ? "bg-green-500" : "bg-pink-800"
            }`}
            clickHandler={(e) => {
              e.stopPropagation();
              AddToCart(cart, setCart, pid);
            }}
            label={`${
              ExistanceInCart(cart, pid) ? "Added to cart" : "Add to cart"
            }`}
            id={pid}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;