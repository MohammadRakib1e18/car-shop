import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1 className="mt-4"><span className="text-primary">Featured</span> <span className="text-success">Cars</span></h1>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;