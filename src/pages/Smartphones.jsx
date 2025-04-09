import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/common/ProductCard';

const Smartphones = () => {
  const {productsData, setProductsData} = useContext(ProductContext);
  
  useEffect(() => {
      fetch(`https://dummyjson.com/products/category/smartphones`)
        .then((res) => res.json())
        .then((data) => setProductsData(data.products))
        .catch(console.error);
    }, [setProductsData]);

  return (
    <div className="container mx-auto flex flex-wrap gap-5 my-50">
      {
        productsData?.map(product => <ProductCard key={product.id} pid={product.id} name={product.title} imgUrl={product.images[0]} retailPrice={product.price} preferredPrice={(product.price - (product.discountPercentage * product.price / 100)).toFixed(2)} pageLink={`/${product.id}`} buyHandler={() => {
          console.log(product.id)
        }}/>)
      }
    </div>
  )
}

export default Smartphones