import React from "react";
import './Comments.css';
import buyer3 from '../../../Images/buyer3.jpg';
import buyer4 from '../../../Images/buyer4.jpg';

const Comments = () => {
    return (
        <div>
            <div className="comments-container text-center">
                <h1>What Our <span className="text-info">Buyers</span> Are Saying</h1>
                <p className="text-secondary">
                    Here are some comments our valuable buyers given
                </p>
                <div className="comments">
                    <div className="text-center single-comment left-comment">
                        <img src={buyer3} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id, et architecto! Dolorem, esse ea qui
                            tempore magnam delectus saepe necessitatibus.
                        </p>
                    </div>
                    <div className="text-center single-comment">
                        <img src={buyer4} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque obcaecati aliquid eos, temporibus sunt
                            iure non quisquam ducimus ex unde?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
