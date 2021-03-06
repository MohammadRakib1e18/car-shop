import {
    Container,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ ml: "8%", mt: "10%" }} xs={12} md={12}>
                        <Typography
                            variant="body1"
                            gutterBottom
                            style={{ fontSize: "2em", color: "orange" }}
                        >
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard"
                            />

                            <Button
                                sx={{ width: "80%", m: 1 }}
                                type="submit"
                                variant="contained"
                            >
                                Login
                            </Button>
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register"
                            >
                                <Button variant="text">
                                    New User? Please Register
                                </Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && (
                                <Alert severity="success">
                                    Login successfully!
                                </Alert>
                            )}
                            {authError && (
                                <Alert severity="error">{authError}</Alert>
                            )}
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default Login;
