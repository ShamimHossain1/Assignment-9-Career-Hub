import { Button } from 'flowbite-react';
import React from 'react';


const Jobs = ({job}) => {
    const{img, title, company_name, location,salary_range}=job;
    
      
    return (
        <div className='border border-gray-300 rounded-lg p-8'>
            <img className='w-3/12 mb-3' src={img} alt="" />
            <h2 className='font-semibold text-2xl text-slate-700'>{title}</h2>
            <h4 className='text-slate-500'>{company_name}</h4>
            <div className='flex gap-4'>
                <span className='rounded '>Remote</span>
                <span>Full Time</span>
            </div>
            <div className='flex gap-5'>
                <p>{location}</p>
                <p>{salary_range}</p>
            </div>
            {/* <Link to={'/job_details'}><Button  style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-3 py-1 ' >View Details</Button></Link> */}
            
        </div>
    );
};

export default Jobs;