// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Pan', price: '$20' },
        { id: 2, name: 'Knife', price: '$10' },
        // Add more products here
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
