import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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

  return (
    <div
      className="w-[15dvw] h-fit p-5 rounded-xl bg-white dark:text-lightPink font-dmSans mx-auto shadow-xl cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;