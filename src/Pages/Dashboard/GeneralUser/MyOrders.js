import React, { useState, useEffect } from "react";
import useAuth from "./../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://intense-temple-81535.herokuapp.com/order?email=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    console.log(orders);

    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Car</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Client</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={order.picture} alt={order.name}/>
                                </TableCell>
                                <TableCell align="right">
                                    {order.carName}
                                </TableCell>
                                <TableCell align="right">
                                    {order.name}
                                </TableCell>
                                <TableCell align="right">
                                    {order.email}
                                </TableCell>
                                <TableCell align="right">
                                    {orders.price}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;
