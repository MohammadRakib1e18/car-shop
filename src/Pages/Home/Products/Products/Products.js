import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
        }, [])
    return (
        <div className="mt-4 products">
            {
                products.map(product => <SingleProduct
                    key={product.index}
                    product={product}
                    ></SingleProduct> )
            }
        </div>
    );
};

export default Products;