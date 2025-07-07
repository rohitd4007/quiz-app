import React from 'react';
import './home.css';
import Banner from '../Banner/banner';
import Categories from '../Categories/categories';
import Footer from '../Footer/footer';

const Home = ({ onPlayQuiz }) => {
    return (
        <div className="home-container">
            <Banner onPlayQuiz={onPlayQuiz} />
            <Categories />
            <Footer />
        </div>
    );
}

export default Home;