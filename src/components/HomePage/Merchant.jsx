import React from 'react';
import locationMerchantImg from "../../assets/location-merchant.png"
import Button from '../../Button';

const Merchant = () => {
    return (
     <div data-aos="zoom-in-up" className=" mt-10 mb-20 bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-[32px]  bg-[#03373D] p-20 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={locationMerchantImg}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-4xl text-start w-[673px] text-white font-extrabold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6 text-base text-[#DADADA] text-start w-[551px]">
     We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
     <div className='flex items-center justify-start gap-4'>
         <Button name="Become a Merchant"/>
      <Button name="Earn with Profast Courier"/>
     </div>
    </div>
  </div>
</div>
    );
};

export default Merchant;