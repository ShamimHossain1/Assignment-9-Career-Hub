
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import './applications.css'

const Applications = ({ application }) => {

    const { img, title, company_name, location, salary_range,type, time } = application;



    return (
        <div className=' flex border border-gray-300 rounded-lg lg:p-5 p-2 items-center lg:justify-between mb-6 lg:h-72'>
            <div className='flex gap-5'>
                <div className='flex items-center justify-center w-1/3  lg:w-60 lg:h-60 bg-gray-100 rounded-lg lg:p-5'>
                    <img src={img} alt="" />
                </div>
                <div className='flex flex-col lg:gap-4 gap-1 lg:mt-5 font-semibold'>
                    <h2 className=' lg:text-3xl text-slate-700'>{title}</h2>
                    <h4 className='text-slate-500 lg:text-2xl text-sm'>{company_name}</h4>
                    <div className='flex gap-4 text-blue-600 lg:text-base type '>
                        <span className='rounded border p-1  border-blue-600 '>{type}</span>
                        <span className='rounded border p-1    border-blue-600 '>{time}</span>
                    </div>
                    <div className='flex gap-5 lg:text-lg salary text-slate-500'>
                    <p><FontAwesomeIcon icon={faLocationDot}/> {location}</p>
                <p><FontAwesomeIcon icon={faCircleDollarToSlot}/> {salary_range}</p>
                    </div>
                </div>
            </div>

            <Link to={'/job_details'} state={{ details: application }} ><button style={{ background: ' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} 
            className='lg:px-5 lg:py-3  rounded-lg text-white lg:font-semibold lg:text-lg text-xs view-btn  ' >View Details</button></Link>
            

        </div>
    );
};

export default Applications;