import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePassOnBlur = (e)=>{
        setPassword(e.target.value);
    }
    const adminSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch("https://intense-temple-81535.herokuapp.com/admin", {
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
                    sx={{width: '30%'}}
                    type="email"
                    onBlur={handleEmailOnBlur}
                    variant="standard"
                    required
                />
                <br/>
                <TextField
                    label="password"
                    sx={{width: '30%', marginTop: '10px'}}
                    type="password"
                    onBlur={handlePassOnBlur}
                    variant="standard"
                    required
                />
                <br/>
                <Button
                    sx={{ marginTop: "10px", width: "20%" }}
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
