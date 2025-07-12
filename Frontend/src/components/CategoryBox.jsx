import React from 'react';

const categories = [
    {
        name: "Menswear",
        description: "Pre-loved and stylish clothing for men, from casual to formal wear.",
    },
    {
        name: "Womenswear",
        description: "Trendy, elegant, and everyday wear for women – refresh your wardrobe sustainably.",
    },
    {
        name: "Kidswear",
        description: "Gently-used clothes for growing kids, from toddlers to teens.",
    },
    {
        name: "Unisex",
        description: "Gender-neutral fashion pieces for everyone – inclusive and eco-friendly.",
    },
    {
        name: "Accessories",
        description: "Bags, belts, scarves, and more – the perfect add-ons to any outfit.",
    },
    {
        name: "Footwear",
        description: "From sneakers to sandals, shop pre-owned shoes in great condition.",
    },
    {
        name: "Seasonal Wear",
        description: "Winter jackets, summer dresses, and everything in between – for every season, reused with reason.",
    },
];

const CategoryBox = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800">
                Explore Categories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        aria-label={`Browse ${category.name}`}
                        className="h-[140px] rounded-xl border border-gray-300 bg-white shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-left px-6 py-5 flex flex-col justify-center"
                        onClick={() => alert(`Clicked on ${category.name}`)} // Replace with navigation logic
                    >
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryBox;
