import {Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
    const [product, setProduct] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        let value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    };
    const submitReview = (e) => {
        fetch('https://intense-temple-81535.herokuapp.com/productAdded', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.result.insertedId){
                alert('Product Added Successfully!');
            }
        })

        e.preventDefault();
    };

    return (
        <div>
            <h2 className="my-3">
                Add <span className="text-danger">Product</span>
            </h2>
            <hr />
            <form onSubmit={submitReview}>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter Car Name
                    </label>
                    <input
                        name="name"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="car name"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Car's Image URL
                    </label>
                    <input
                        name="picture"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="paste car picture url"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Rating
                    </label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        id="exampleFormControInput1"
                        placeholder="car price"
                        onBlur={handleOnBlur}
                        required
                    />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Short Description
                    </label>
                    <textarea
                        className="form-control"
                        name="about"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onBlur={handleOnBlur}
                        required
                    ></textarea>
                </div>
                <Button
                    sx={{ width: "25%", m: 1 }}
                    type="submit"
                    variant="contained"
                >
                    Upload the Product
                </Button>
            </form>
            <Link to='/home' className="btn">Back to Home</Link>
        </div>
    );
};

export default AddProduct;
