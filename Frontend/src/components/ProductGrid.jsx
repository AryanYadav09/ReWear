import React from 'react';
import ProductItem from './ProductItem';

const dummyProducts = [
    {
        id: 1,
        name: 'Vintage Jacket',
        image: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80'],
        price: 49.99,
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        image: ['https://images.unsplash.com/photo-1580894908361-966b8c072b14?auto=format&fit=crop&w=600&q=80'],
        price: 89.99,
    },
    {
        id: 3,
        name: 'Modern Lamp',
        image: ['https://images.unsplash.com/photo-1578898884030-9d58db498e4b?auto=format&fit=crop&w=600&q=80'],
        price: 29.99,
    },
    {
        id: 4,
        name: 'Running Shoes',
        image: ['https://images.unsplash.com/photo-1606813905804-6df94f63fe39?auto=format&fit=crop&w=600&q=80'],
        price: 74.99,
    },
    {
        id: 5,
        name: 'Minimalist Watch',
        image: ['https://images.unsplash.com/photo-1587474260584-136574528ed2?auto=format&fit=crop&w=600&q=80'],
        price: 119.99,
    },
    {
        id: 6,
        name: 'Eco Tote Bag',
        image: ['https://images.unsplash.com/photo-1620799140403-d3cbb0bc0c71?auto=format&fit=crop&w=600&q=80'],
        price: 24.99,
    },
];

const ProductGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dummyProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;