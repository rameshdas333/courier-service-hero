import React from 'react';
import profastLogo from "../../assets/profastLogo.png"
const ProfastLogo = () => {
    return (
        <div className='flex items-end '>
            <img className='' src={profastLogo} alt="" />
            <p className='text-[32px] -ml-3 font-extrabold'>Profast</p>
        </div>
    );
};

export default ProfastLogo;