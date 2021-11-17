import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const adminSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const user = { email };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("Make Admin Successfully!");
                }
                else if(data.matchedCount){
                    alert("Already Admin!");
                }
                else{
                    alert("Sorry! Email didn't match with our user list");
                }
            });
    };
    return (
        <div>
            <h2 className="my-5">Make an Adming</h2>
            <form onSubmit={adminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    required
                />
                <Button
                    sx={{ marginTop: "10px", width: "10%" }}
                    type="submit"
                    variant="contained"
                >
                    Add Admin
                </Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
