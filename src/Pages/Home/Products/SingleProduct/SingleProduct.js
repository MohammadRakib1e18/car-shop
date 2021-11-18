import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

const Product = (props) => {
    // destructuring
    const { _id, picture, about, price, name } = props.product;

    return (
        <div className="product">
            <img className="text-center" src={picture} alt="" />
            <div className="text-center">
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>{about}</p>
                {
                    <Link style={{textDecoration:"none"}} to={`/purchase/${_id}`}>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button
                                className="btn btn-warning text-decoration-none"
                                type="button"
                            >
                                Purchase Now
                            </button>
                        </div>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Product;
