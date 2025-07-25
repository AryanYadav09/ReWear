import React, { useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import { useContext } from "react";
import ProductItem from "./ProductItem.jsx";
import CategoryBox from "./CategoryBox.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {

    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"CATEGORIES"} text2={"SECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover a variety of fashion categories — from menswear and womenswear to kids’ clothing and accessories. Browse and exchange pre-loved styles sustainably.
        </p>
      </div>

      {/* rendring the products  */}
      <CategoryBox />
      

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6" >
        {
          latestProducts.map((item, index)=> (
            <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }

      </div> */}
     </div>
  );
};

export default LatestCollection;
