import { Grid } from "@mui/material";
import { Container, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
    const { id } = useParams();
    const { user, isLoading } = useAuth();
    const [products, setProducts] = useState([]);
    const [placeOrder, setPlaceOrder] = useState({});

    useEffect(() => {
        fetch("https://intense-temple-81535.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    let selectedProduct = {};
    let len = products.length;

    for (let i = 0; i < len; i++) {
        if (products[i]._id === id) {
            selectedProduct = products[i];
        }
    }
    // destructuring
    const { picture, price, name } = selectedProduct;

    placeOrder["name"] = user.displayName;
    placeOrder["email"] = user.email;
    placeOrder["carName"] = name;
    placeOrder["price"] = price;
    placeOrder["picture"] = picture;

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPlaceOrder = { ...placeOrder };
        newPlaceOrder[field] = value;
        setPlaceOrder(newPlaceOrder);
    };
    const handleOrder = (e) => {
        fetch("https://intense-temple-81535.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(placeOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result.insertedId) {
                    alert("Order Booked Successfully!");
                    // <Alert severity="success">Order Booked Successfully!</Alert>
                }
            });

        e.preventDefault();
    };

    return (
        <Container sx={{ mt: 2 }}>
            <h2 className="text-info">
                Purchase Your Car |
                <span className="text-warning">| {name}</span>
            </h2>
            <hr style={{ paddingBottom: "2px", color: "chocolate" }} />
            <Grid container spacing={6}>
                <Grid item xs={6} md={6} sx={{ mt: 1 }}>
                    <img style={{ width: "90%" }} src={picture} alt={name} />
                </Grid>
                <Grid item xs={6} md={6}>
                    {!isLoading && (
                        <form onSubmit={handleOrder}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                defaultValue={user.displayName}
                                name="name"
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your district"
                                name="district"
                                onBlur={handleOnBlur}
                                variant="standard"
                                required
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your phone"
                                name="phone"
                                onBlur={handleOnBlur}
                                variant="standard"
                                required
                            />

                            <Button
                                sx={{ width: "75%", m: 1 }}
                                type="submit"
                                variant="contained"
                            >
                                Place Order
                            </Button>
                            <br />
                            <Link to="/home" className="btn">
                                Home
                            </Link>
                        </form>
                    )}
                </Grid>
            </Grid>
            <hr
                style={{
                    marginTop: "30px",
                    paddingBottom: "8px",
                    color: "chocolate",
                }}
            />
        </Container>
    );
};

export default Purchase;
