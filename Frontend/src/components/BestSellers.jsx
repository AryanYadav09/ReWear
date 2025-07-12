import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [listedProducts, setListedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setListedProducts(products); // ✅ Show all products
    } else {
      console.log("items not available");
    }
  }, [products]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <div className="text-center text-3xl py-8">
        <Title text1={"PRODUCT"} text2={"LIST"} />
        <p className="w-3/4 m-auto text-sm text-gray-600 mt-2">
          Explore all listed items curated for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listedProducts.length > 0 ? (
          listedProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description} // ✅ Required!
            />

          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No products available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSellers;
