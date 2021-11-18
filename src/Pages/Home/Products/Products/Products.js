import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";

const Products = ({carCounter}) => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://intense-temple-81535.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    if (carCounter) {
        const homeProducts = products.slice(0, 6);
        return (
            <div className="mt-4 products">
                {homeProducts.map((product) => (
                    <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>
                ))}
            </div>
        );
    }

    return (
        <div className="mt-4 products">
            {products.map((product) => (
                <SingleProduct
                    key={product._id}
                    product={product}
                ></SingleProduct>
            ))}
        </div>
    );
};

export default Products;
