import { Button } from 'flowbite-react';
import React from 'react';
import { useLocation } from 'react-router-dom';


const JobDetails = () => {

    const locations = useLocation();
   const {company_name, email, experience, job_description, job_responsibility, location, phone, requirement, salary_range, title}= locations.state?.details
  
    return (
        <div>
            <div className='flex items-center gap-96' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <img src="https://cdn.discordapp.com/attachments/1094672876969398413/1094939122990334053/Vector.png" alt="" />
                <h2 className='text-4xl font-semibold mb-5 ml-36'>Job Details</h2>
            </div>
            <div className='flex px-44 py-32 justify-center gap-10'>
                <div>
              
                    <p>Responsibility: <span></span></p>
                    <p>Educational Requirements:</p>
                    <p></p>
                    <p>Experiences:</p>
                    <p></p>
                </div>
                <div>
                    <div className='p-5 rounded-lg' style={{ background: 'linear-gradient(90deg, rgba(126, 14, 254, 0.05) 0%, rgba(152, 15, 255, 0.05) 100%)' }}>
                        <h3>Job Details</h3>
                        <hr />
                        <h3>Salary :</h3>
                        <h3>Job Title :</h3>
                        <hr />
                        <h3>Contact Information</h3>
                        <h3>Phone :</h3>
                        <h3>Email : </h3>
                        <h3>Address :</h3>

                    </div>
                    <Button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-2 py-1'>Apply Now</Button>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;