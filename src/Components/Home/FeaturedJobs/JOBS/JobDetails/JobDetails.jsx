import React from 'react';
import { useLocation } from 'react-router-dom';


const JobDetails = () => {

    const location = useLocation();
   const details= location.state?.details
   console.log(details);
  
    return (
        <div>
            <div className='flex items-center gap-96' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <img src="https://cdn.discordapp.com/attachments/1094672876969398413/1094939122990334053/Vector.png" alt="" />
                <h2 className='text-4xl font-semibold mb-5 ml-36'>Job Details</h2>
            </div>
        </div>
    );
};

export default JobDetails;