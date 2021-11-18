import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box clssName="container-fluid" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        {<MenuIcon />}
                        {
                            user?.email?
                            <Typography style={{marginLeft:'5px'}}>
                                <span style={{ color: "PeachPuff" }}>
                                    Welcome,{" "}
                                </span>{" "}
                                <span style={{ color: "DarkOrange" }}>
                                    {user.displayName}
                                </span>
                            </Typography>
                            :<Typography/>
                        }
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="header"
                    >
                        Modern Car Shop
                    </Typography>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "yellowgreen",
                        }}
                        to="/home"
                    >
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "yellowgreen",
                        }}
                        to="/products"
                    >
                        <Button color="inherit">Explore Cars</Button>
                    </Link>
                    {user?.email ? (
                        <Box>
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to="/dashboardHome"
                            >
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logout} color="inherit">
                                Logout
                            </Button>
                        </Box>
                    ) : (
                        <NavLink
                            style={{ textDecoration: "none", color: "white" }}
                            to="/login"
                        >
                            <Button color="inherit">Login</Button>
                        </NavLink>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
