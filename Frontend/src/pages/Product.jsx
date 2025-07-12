import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const relatedRef = useRef(null);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
    window.scrollTo(0, 0); // Scroll to top
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart(productData._id, size);
    setTimeout(() => {
      relatedRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return productData ? (
    <div className="border-t-2 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
              {productData.image?.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt={`Product Image ${index + 1}`}
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            <div className="flex-1">
              <img src={image} alt="Selected Product" className="w-full" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(4)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="" className="w-3.5" />
              ))}
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className="pl-2">(122)</p>
            </div>

            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-[90%] lg:w-[85%] xl:w-[75%]">
              {productData.description}
            </p>

            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(size === item ? "" : item)}
                    className={`border py-2 px-4 bg-gray-100 rounded-md transition-all ${item === size
                        ? "border-orange-500 ring-2 ring-orange-400"
                        : "hover:border-gray-400"
                      }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and Exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <div className="mt-20 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                vero, modi praesentium nostrum vitae obcaecati officiis ipsam maxime
                quibusdam iure neque reprehenderit in, cum aut dolores pariatur
                beatae, cumque ex mollitia laboriosam dolorem?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis voluptate cum non consequatur rem ipsa quod officia
                nesciunt tempore ea, odio expedita quam molestiae eius repellat
                magnam quisquam recusandae!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div ref={relatedRef} className="mt-20 max-w-7xl mx-auto px-4">
        <RelatedProduct
          subCategory={productData.subCategory}
          category={productData.category}
        />
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Loading product data...</div>
  );
};

export default Product;
