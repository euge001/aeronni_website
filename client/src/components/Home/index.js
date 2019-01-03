import React from 'react';
import HomeContainer from '../../containers/home_container';
import Slider2 from '../Slider';
import Mainblocks from './mainblocks';
import Footer from '../Footer';


const Home = () => {
    return (
        <div>
            <Slider2 />
            <Mainblocks />
            <Footer />
        </div>
    );
};

export default Home;