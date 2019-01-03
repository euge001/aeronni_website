import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import { Link } from 'react-router-dom';

const content = [
    {
        title: 'Special Missions Custom Made Drones',
        description:
            'We combine leading edge aerospace engineering with perfectly made software.',
        button: 'Read More',
        image: '/images/001.jpg',
        link: '/Aerial-Application-Robot'
    },
    {
        title: 'Safest Manned Drone System',
        description:
            'Ideal urban transport, you let your kid to fly.',
        button: 'Discover future',
        image: '/images/715.jpg',
        link: '/Manned-Drone-System'
    },
    {
        title: 'Smart Machine',
        description:
            'We do both mechanics and electronics easy for you to use. All you need is your mobile.',
        button: 'Software we develop',
        image: '/images/002.jpg',
        link: '/Software'
    }
];

const slider2 = () => (

    <Slider
        className="slider-wrapper"
        autoplay="4444"
    >
        {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <Link to={`${item.link}`}><button>{item.button}</button></Link>
                </div>
            </div>
        ))}
    </Slider>
);

export default slider2;
