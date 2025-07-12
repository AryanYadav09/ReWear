import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ id, image, name, price, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-full h-[480px] flex flex-col hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={name}
        className="h-[60%] w-full object-cover"
      />
      <div className="h-[40%] p-3 flex flex-col">
        <h3 className="text-base font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {description || "No description available."}
        </p>
        <p className="text-black font-semibold text-sm sm:text-base mt-2">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
