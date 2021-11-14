import React from 'react';
import './SingleProduct.css';

const Product = (props) => {
    // destructuring
    const {picture, about, price, name} = props.product;

    return (
        <div className="product">
            <img className="text-center" src={picture} alt="" />
            <div className="text-center">
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <p>{about}</p>

                {/* <Link to={`/booking/${_id}`}>
                    <button className="btn btn-warning">Order Now</button>
                </Link> */}
            </div>
        </div>
    );
};

export default Product;