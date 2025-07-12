import React from 'react';

const categories = [
    {
        name: "Fashion",
        description: "Trendy apparel and accessories",
    },
    {
        name: "Electronics",
        description: "Latest gadgets and devices",
    },
    {
        name: "Home Decor",
        description: "Style your space beautifully",
    },
    {
        name: "Fitness",
        description: "Gear up for a healthier you",
    },
    {
        name: "Books",
        description: "Explore new stories and knowledge",
    },
    {
        name: "Toys",
        description: "Fun and learning for kids",
    },
];

const CategoryBox = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="min-w-[200px] h-[140px] rounded-xl border border-gray-400 bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-gray-800 text-left px-6 py-6 flex flex-col justify-center"
                    onClick={() => alert(`Clicked on ${category.name}`)} // Replace with real navigation
                >
                    <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                </button>
            ))}
        </div>
    );
};

export default CategoryBox;
