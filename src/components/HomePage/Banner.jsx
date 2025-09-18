import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../assets/banner1.png"
import bannerImg2 from "../../assets/banner1.png"
import bannerImg3 from "../../assets/banner1.png"
const Banner = () => {
    return (
       <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div>
                    <img src={bannerImg1} />
                    
                </div>
                <div>
                    <img src={bannerImg2}/>
                  
                </div>
                <div>
                    <img src={bannerImg3} />
                 
                </div>
            </Carousel>
    );
};

export default Banner;