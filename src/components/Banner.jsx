import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import banner01 from '../assets/img/banner01.webp';
import banner02 from '../assets/img/banner02.jpg';
import banner03 from '../assets/img/banner03.png';

const banners = [banner01, banner02, banner03];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevBanner = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextBanner, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <img src={banners[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
            <button className="prev" onClick={prevBanner}>&lt;</button>
            <button className="next" onClick={nextBanner}>&gt;</button>
        </div>
    );
};

export default Banner;
