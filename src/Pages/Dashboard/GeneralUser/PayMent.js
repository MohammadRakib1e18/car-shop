import React from "react";
import { Link } from "react-router-dom";

const PayMent = () => {
    return (
        <div>
            <h2 className="my-5">
                <span className="text-success">PayMent</span>{" "}
                <span className="text-orange">Comming</span>{" "}
                <span className="text-success">Soon!</span>
            </h2>
            <Link to='/dashboardHome' className="btn">Back to DashBoard</Link>
        </div>
    );
};

export default PayMent;
