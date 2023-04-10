import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Applications = ({ application }) => {

    const { img, title, company_name, location, salary_range } = application;


    return (
        <div className=' flex border border-gray-300 rounded-lg p-5 items-center justify-between mb-6 h-72'>
            <div className='flex gap-5'>
                <div className='flex items-center justify-center  w-60 h-60 bg-gray-100 rounded-lg p-5'>
                    <img src={img} alt="" />
                </div>
                <div className='flex flex-col gap-4 mt-5 font-semibold'>
                    <h2 className=' text-3xl text-slate-700'>{title}</h2>
                    <h4 className='text-slate-500 text-2xl'>{company_name}</h4>
                    <div className='flex gap-4 text-blue-600 '>
                        <span className='rounded border p-1  border-blue-600 '>Remote</span>
                        <span className='rounded border p-1   border-blue-600 '>Full Time</span>
                    </div>
                    <div className='flex gap-5 text-lg text-slate-500'>
                        <p>{location}</p>
                        <p>{salary_range}</p>
                    </div>
                </div>
            </div>

            <Link to={'/job_details'} state={{ details: application }} ><button style={{ background: ' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} 
            className='px-5 py-3 rounded-lg text-white font-semibold text-lg ' >View Details</button></Link>

        </div>
    );
};

export default Applications;