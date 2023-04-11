import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';


const Jobs = ({job}) => {
    const{img, title, company_name, location,salary_range,type, time}=job;
    // console.log(type)
      
    return (
        <div className='border border-gray-300 rounded-lg flex flex-col p-10 gap-4 mt-5 font-semibold'>
            <img className='lg:w-5/12 mb-3' src={img} alt="" />
            <h2 className=' lg:text-3xl text-2xl text-slate-700'>{title}</h2>
            <h4 className='text-slate-500 lg:text-2xl'>{company_name}</h4>
            <div className='flex gap-4 text-blue-600 '>
                <span className='rounded border p-1  border-blue-600 '>{type}</span>
                <span className='rounded border p-1  border-blue-600 '>{time}</span>
            </div>
            <div className='lg:flex gap-5 text-lg text-slate-500'>
                <p><FontAwesomeIcon icon={faLocationDot}/> {location}</p>
                <p><FontAwesomeIcon icon={faCircleDollarToSlot}/> {salary_range}</p>
            </div>
          <div className='mt-auto '>
          <Link to={'/job_details'} state={{details:job}} ><Button  style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-3 py-1 ' >View Details</Button></Link>
          </div>
            
        </div>
    );
};

export default Jobs;