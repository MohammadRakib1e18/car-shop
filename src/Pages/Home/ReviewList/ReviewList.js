import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import './ReviewList.css';
import { Link } from "react-router-dom";

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/review`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    return (
        <div className="text-center">
            <h2>
                Site <span className="text-warning">Reviews</span>
            </h2>
            <h5 style={{color:'cadetBlue'}} className="mb-5">Give me Your valuable instructions <Link to='/dashboardHome/review' className="btn">Here</Link></h5>
            <hr className="mx-auto" style={{color: 'chocolate', marginTop: '-35px' ,height:'2px', width: "40%"}}/>
            <section className="review mt-5">
                {review.map((singleReview) => (
                    <SingleReview
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></SingleReview>
                ))}
            </section>
        </div>
    );
};

export default Review;
