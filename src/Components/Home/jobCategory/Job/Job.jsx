import React from 'react';

const Job = ({ category }) => {
   
    return (

        <div style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }} className='p-10 w-full rounded-xl'>
                
                <img className='' src={category.icon} alt="" /><br />
                <h2 className='text-xl font-semibold mb-1'>{category.title}</h2>
                <p className='text-gray-400'>{category.available_positions}</p>

        </div>



    );
};

export default Job;