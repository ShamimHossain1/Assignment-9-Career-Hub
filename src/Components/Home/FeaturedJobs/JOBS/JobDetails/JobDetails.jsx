import { Button } from 'flowbite-react';
import React from 'react';
import { useLocation } from 'react-router-dom';


const JobDetails = () => {

    const locations = useLocation();
   const {company_name, email, experience, job_description, job_responsibility, location, phone, requirement, salary_range, title, id}= locations.state?.details
  
    return (
        <div>
            <div className='flex items-center gap-96' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <img src="https://cdn.discordapp.com/attachments/1094672876969398413/1094939122990334053/Vector.png" alt="" />
                <h2 className='text-4xl font-semibold mb-5 ml-36'>Job Details</h2>
            </div>
            <div className='flex px-44 py-32 justify-center gap-10'>
                <div className='text-lg flex flex-col gap-6'>
                    <p><span className='font-semibold'>Job Description : </span><span className='text-gray-500'> {job_description}</span></p>
                    <p><span className='font-semibold'>Responsibility : </span> <span className='text-gray-500'> {job_responsibility}</span></p>
                    <p className='font-semibold' >Educational Requirements :</p>
                    <p className='text-gray-500'>{requirement}</p>
                    <p className='font-semibold'>Experiences :</p>
                    <p className='text-gray-500'>{experience}</p>
                </div>
                <div>
                    <div className='p-5 rounded-lg text-lg flex flex-col gap-5 w-96' style={{ background: 'linear-gradient(90deg, rgba(126, 14, 254, 0.05) 0%, rgba(152, 15, 255, 0.05) 100%)' }}>
                        <h3 className='font-semibold'>Job Details</h3>
                        <hr />
                        <p><span className='font-semibold'>Salary:</span> <span className='text-gray-500'>{salary_range}</span></p>
                        <p><span className='font-semibold'>Job Title:</span> <span className='text-gray-500'>{title}</span></p>
                        <hr />
                        <h3 className='font-semibold'>Contact Information</h3>
                        <p><span className='font-semibold'>Phone :</span> <span className='text-gray-500'>{phone}</span></p>
                        <p><span className='font-semibold'>Email : </span> <span className='text-gray-500'>{email}</span></p>
                        <p><span className='font-semibold'>Address :</span> <span className='text-gray-500'>{location}</span></p>

                    </div>
                    <Button  style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-2 py-1 mt-5 w-full'>Apply Now</Button>
                    {/* onClick={()=>handleClick(id)} */}
                </div>
            </div>
        </div>
    );
};

export default JobDetails;