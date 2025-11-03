import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../../assets/authImage.png'
import Navbar from '../HomePage/Navbar';
import ProfastLogo from '../HomePage/ProfastLogo';

const AuthLayout = () => {
    return (
   
       <div>
        {/* <Navbar/> */}
      
        <div className="  ">
           
        <div className=''>
            <ProfastLogo />
        </div>
  <div className="hero-content  flex-col  lg:flex-row-reverse">
  {/* image section */}
   <div className='flex-1  '>
     <img
      src={authImage}
      className=" max-w-sm rounded-lg shadow-2xl"
    />
   </div>
   {/* outlet section */}
    <div className='flex-1 '>
     <Outlet/>
    </div>
  </div>
</div>
       </div> 

    );
};

export default AuthLayout;