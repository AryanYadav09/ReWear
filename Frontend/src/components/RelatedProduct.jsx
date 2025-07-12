import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        let productCopy = products.slice();

        if (productCopy.length > 0) {
            productCopy = productCopy.filter((item) => item.category === category);
            productCopy = productCopy.filter((item) => item.subCategory === subCategory);

            setRelated(productCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);

    return (
        <div className="my-24 px-4 max-w-7xl mx-auto">
            <div className="text-center text-3xl py-2">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 justify-center">
                {related.map((item) => (
                    <Link to={`/product/${item._id}`} key={item._id}>
                        <div className="bg-white border rounded-md p-4 shadow-md hover:shadow-lg transition-all max-w-[340px] mx-auto">
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;
