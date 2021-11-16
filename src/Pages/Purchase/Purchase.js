import { CircularProgress, Grid } from "@mui/material";
import { Container, Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import InputAdornment from "@mui/material/InputAdornment";

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
        if (products[i].index === parseInt(id)) {
            selectedProduct = products[i];
        }
    }
    // destructuring
    const { picture, price, name } = selectedProduct;
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPlaceOrder = { ...placeOrder };
        newPlaceOrder[field] = value;
        setPlaceOrder(newPlaceOrder);
    };
    const handleOrder = (e) => {
        console.log(placeOrder);
        e.preventDefault();
    };

    return (
        <Container sx={{ mt: 2 }}>
            <h2 className="text-info">Purchase Your Favourite Car!</h2>
            <hr style={{ paddingBottom: "2px", color: "chocolate" }} />
            <Grid container spacing={6}>
                <Grid item xs={6} md={6} sx={{ mt: 4 }}>
                    <img style={{ width: "90%" }} src={picture} alt={name} />
                </Grid>
                <Grid item xs={6} md={6}>
                    {!isLoading && (
                        <form onSubmit={handleOrder}>
                            <TextField
                                sx={{ width: "75%" }}
                                id="standard-basic"
                                label="Your Name"
                                defaultValue={user.displayName}
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            Buyer Name: 
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                sx={{ width: "75%", m: 1, color: "red" }}
                                id="standard-basic"
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            E-mail: 
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                sx={{ width: "75%", m: 1, color: "red" }}
                                id="standard-basic"
                                defaultValue={name}
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            Car Name: 
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                sx={{ width: "75%", m: 1, color: "red" }}
                                id="standard-basic"
                                defaultValue={price}
                                name="price"
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            Price: 
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                name="district"
                                defaultValue=""
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            District: 
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                name="phone"
                                defaultValue=""
                                onBlur={handleOnBlur}
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            Phone: 
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                sx={{ width: "75%", m: 1 }}
                                type="submit"
                                variant="contained"
                            >
                                Place Order
                            </Button>
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
