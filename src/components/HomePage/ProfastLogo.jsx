import React from 'react';
import profastLogo from "../../assets/profastLogo.png"
import { Link } from 'react-router';
const ProfastLogo = () => {
    return (
    <Link to="/">
        <div className='flex items-end '>
            <img className='' src={profastLogo} alt="" />
            <p className='text-[32px] -ml-2 font-extrabold'>Profast</p>
        </div>
    </Link>
    );
};

export default ProfastLogo;