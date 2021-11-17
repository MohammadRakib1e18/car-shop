import React from "react";

const SingleReview = ({ singleReview }) => {
    let { name, comment, rating } = singleReview;
    rating=parseInt(rating);
    return (
        <div>
            <div className="my-4">
                <h2>
                    <i className="fas fa-user-edit"></i>{" "}
                    <span className="text-secondary">{name}</span>
                </h2>
                <h4 className="text-danger mb-3">
                    <i className="far fa-comment text-dark"></i> {comment}
                </h4>
                {[...Array(rating)].map((rate) => (
                    <i class="fa fa-star text-warning fs-5"></i>
                ))}
                {[...Array(5 - rating)].map((rate) => (
                    <i class="far fa-star fs-5"></i>
                ))}
            </div>
            <hr
                className="mx-auto"
                style={{
                    marginTop: "-20px",
                    height: "2px",
                    width: "50%",
                }}
            />
        </div>
    );
};

export default SingleReview;
