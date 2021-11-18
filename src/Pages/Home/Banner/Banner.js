import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner1.jpg';

const Banner = () => {
    return (
        <div className="banner-container container-fluid">
                <div className="w-40">
                    <img src={banner} alt="" />
                </div>
                <div className="w-40 banner-descrition text-center">
                    <h1>Amazing Car Shops</h1>
                    <h4>Best and Luxury Cars</h4>
                </div>
        </div>
    );
};

export default Banner;