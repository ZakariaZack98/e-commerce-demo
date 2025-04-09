import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/common/ProductCard";

const ProductsGrid = () => {
  const location = useLocation();
  const path = location.pathname;

  const { productsData, setProductsData } = useContext(ProductContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category${path}`)
      .then((res) => res.json())
      .then((data) => setProductsData(data.products))
      .catch(console.error);
  }, [path, setProductsData]);

  return (
    <div className="container mx-auto flex flex-wrap gap-5 my-50">
      {productsData?.map((product) => (
        <ProductCard
          key={product.id}
          pid={product.id}
          name={product.title}
          imgUrl={product.images[0]}
          retailPrice={product.price}
          preferredPrice={(
            product.price -
            (product.discountPercentage * product.price) / 100
          ).toFixed(2)}
          pageLink={`/${product.id}`}
          buyHandler={() => {
            console.log(product.id);
          }}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
