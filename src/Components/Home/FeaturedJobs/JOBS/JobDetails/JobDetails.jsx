import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../../../FakeDB/FakeDB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faLocationDot, faCircleDollarToSlot, faPhone, faMailBulk, faMailReply, faMessage, faMailReplyAll, faMailForward, faCalendar, faPeopleArrows, faBriefcase, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const JobDetails = () => {

    const locations = useLocation();
    const { company_name, email, experience, job_description, job_responsibility, location, phone, requirement, salary_range, title, id } = locations.state?.details;
    const [appliedJob, setAppliedJob] = useState([])






    const handleClick = (job) => {

        const newAppliedJobs = [...appliedJob, job]
        setAppliedJob(newAppliedJobs);
        addToDb(job.id)        
            if (newAppliedJobs.length >= 2) {
                toast("Already Applied");
            }
            else {
                toast("Applied");
            }


        
    }





    return (
        <div>
            <div className='flex items-center lg:gap-96 py-5 px-5' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <img className='w-2/6 lg:w-auto' src="https://cdn.discordapp.com/attachments/1094672876969398413/1094939122990334053/Vector.png" alt="" />
                <h2 className='text-4xl font-semibold mb-5 lg:ml-36 text-center'>Job Details</h2>
            </div>
            <div className='lg:flex lg:px-44 px-4 lg:py-32 py-5  justify-center lg:gap-10'>
                <div className='text-lg flex flex-col gap-6'>
                    <p><span className='font-semibold'>Job Description : </span><span className='text-gray-500'> {job_description}</span></p>
                    <p><span className='font-semibold'>Responsibility : </span> <span className='text-gray-500'> {job_responsibility}</span></p>
                    <p className='font-semibold' >Educational Requirements :</p>
                    <p className='text-gray-500'>{requirement}</p>
                    <p className='font-semibold'>Experiences :</p>
                    <p className='text-gray-500'>{experience}</p>
                </div>
                <div>
                    <div className='p-5 rounded-lg text-lg flex flex-col gap-5 lg:w-96 mt-8 lg:mt-0' style={{ background: 'linear-gradient(90deg, rgba(126, 14, 254, 0.05) 0%, rgba(152, 15, 255, 0.05) 100%)' }}>
                        <h3 className='font-semibold'>Job Details</h3>
                        <hr />
                        <p><FontAwesomeIcon className="text-indigo-600" icon={faCircleDollarToSlot} />  <span className='font-semibold'>Salary:</span> <span className='text-gray-500'>{salary_range}</span></p>
                        <p><FontAwesomeIcon className="text-indigo-600" icon={faBriefcase} /> <span className='font-semibold'>Job Title:</span> <span className='text-gray-500'>{title}</span></p>
                        <hr />
                        <h3 className='font-semibold'>Contact Information</h3>
                        <p><FontAwesomeIcon className="text-indigo-600" icon={faPhone} />  <span className='font-semibold'>Phone :</span> <span className='text-gray-500'>{phone}</span></p>
                        <p><FontAwesomeIcon className="text-indigo-600" icon={faEnvelope} />  <span className='font-semibold'>Email : </span> <span className='text-gray-500'>{email}</span></p>
                        <p><FontAwesomeIcon className="text-indigo-600" icon={faLocationDot} /><span className='font-semibold'>  Address :</span> <span className='text-gray-500'>{location}</span></p>

                    </div>
                    <Button onClick={() => handleClick(locations.state?.details)} style={{ background: ' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className='px-2 py-1 mt-5 w-full'><span className='text-lg'>Apply Now</span></Button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;