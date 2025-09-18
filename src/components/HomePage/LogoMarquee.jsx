import React from "react";
import Marquee from "react-fast-marquee";
import casioImg from "../../assets/casio.png"
import AmazonImg from "../../assets/amazon.png"
import moonStarImg from "../../assets/moonStar.png"
import starImg from "../../assets/start.png"
import starPeopleImg from "../../assets/start-people 1.png"
import randstandImg from "../../assets/randstad.png"


const LogoMarquee = () => {
  return (
    <div className="bg-gray-50 mt-20 py-6 rounded-xl overflow-hidden">
      <h3 className="text-center text-lg font-semibold text-teal-900 mb-6">
        We've helped thousands of sales teams
      </h3>
    
          <Marquee gradient={false} speed={100} pauseOnHover={true}>
           <div className="flex items-center justify-center">
          <img className="mx-8" src={casioImg} alt="" />
        <img className="mx-8" src={AmazonImg} alt="" />
        <img className="mx-8" src={moonStarImg} alt="" />
        <img className="mx-8" src={starImg} alt="" />
        <img className="mx-8" src={starPeopleImg} alt="" />
        <img className="mx-8" src={randstandImg} alt="" />
          </div>
    
       </Marquee>
     
     
       
    </div>
  );
};

export default LogoMarquee;
