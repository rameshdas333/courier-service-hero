import React from "react";
import liveTracking from "../../assets/live-tracking.png"
import saveDalibary from "../../assets/safe-delivery.png"

export default function ParcellIssues() {
  const services = [
    {
      img:liveTracking ,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
      img: saveDalibary,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img:saveDalibary,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className=" py-12 grid gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className=" relative after:absolute after:content-[''] after:h-full after:w-[2px] after:top-0  after:left-[230px] after:bg-[#03464D] flex items-center gap-6 bg-base-100 shadow-md rounded-xl "
        >
         
            <img className=" p-8 w-[200px] h-[200px]" src={service.img} alt=""/>
        {/* border */}
          
            {/* border */}
          <div>
            <h2 className=" text-2xl font-extrabold  mb-2">{service.title}</h2>
            <p className="text-gray-600 text-base  leading-6 font-medium w-[900px] pl-7  ">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}