import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearchBar } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (showSearchBar && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(filtered);
  };

  const sortProduct = () => {
    const sorted = [...filterProduct];
    if (sortType === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilterProduct(sorted);
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearchBar, products]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  return (
    <div className="bg-white py-10 border-t w-full">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Sidebar Filters */}
          <div className="min-w-60">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2"
            >
              FILTERS
              <img
                className={`h-3 sm:hidden transition-transform ${showFilter ? "rotate-90" : ""}`}
                src={assets.dropdown_icon}
                alt="dropdown"
              />
            </p>

            {/* Category Filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Men", "Women", "Kids"].map((cat) => (
                  <label className="flex gap-2 items-center" key={cat}>
                    <input
                      className="w-3"
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Sub Category Filter */}
            <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                  <label className="flex gap-2 items-center" key={type}>
                    <input
                      className="w-3"
                      type="checkbox"
                      value={type}
                      onChange={toggleSubCategory}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <Title text1="ALL" text2="COLLECTION" />
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="mt-2 sm:mt-0 border border-gray-300 text-sm px-3 py-2 rounded"
              >
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filterProduct.length > 0 ? (
                filterProduct.map((item, index) => (
                  <ProductItem
                    key={index}
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
