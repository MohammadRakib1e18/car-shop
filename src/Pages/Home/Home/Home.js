import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';
import Products from '../Products/Products/Products';
import Comments from '../Comments/Comments';
import ReviewList from '../ReviewList/ReviewList';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1 className="mt-4"><span className="text-primary">Featured</span> <span className="text-success">Cars</span></h1>
            <Products carCounter={6}></Products>
            <hr />
            <ReviewList/>
            <hr />
            <Comments></Comments>
            <Footer></Footer>
        </div>
    );
};

export default Home;