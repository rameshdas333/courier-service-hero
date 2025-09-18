import React from 'react';

const Button = ({name}) => {
    return (
        <div className='px-8 py-4 bg-primary1 rounded-[99px]'>
            {name}
        </div>
    );
};

export default Button;