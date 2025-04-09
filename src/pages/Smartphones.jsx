import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/common/ProductCard';

const Smartphones = () => {
  const {productsData, setProductsData} = useContext(ProductContext);
  
  fetch('https://dummyjson.com/products/category/smartphones')
  .then(res => res.json())
  .then(data => setProductsData(data.products))
  .catch(console.error)

  return (
    <div className="container mx-auto flex flex-wrap gap-5 my-50">
      {
        productsData?.map(product => <ProductCard pid={product.id} name={product.title} imgUrl={product.images[0]} retailPrice={product.price} preferredPrice={product.price - product.discountPercentage / 100} pageLink={`/${product.id}`} buyHandler={() => {
          console.log(product.id)
        }}/>)
      }
    </div>
  )
}

export default Smartphones