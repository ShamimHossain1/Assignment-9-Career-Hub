import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../FakeDB/FakeDB';
import Applications from './Applications/Applications';

const AppiliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [applications, setApplication] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        const jobApplications = getShoppingCart();
        const totalApplications = [];
        for (const id in jobApplications) {
            const appliedJobs = jobs.find(job => job.id === id)
            if (appliedJobs) {
                const quantity = jobApplications[id];
                appliedJobs.quantity = quantity;
                totalApplications.push(appliedJobs);
            }


        }


        setApplication(totalApplications);
    }, [jobs])

    // applications.map(application=>console.log(application))

    return (


        <div>
            <div className='flex items-center lg:gap-96 py-5' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <img className='lg:w-auto w-1/3' src="https://cdn.discordapp.com/attachments/1094672876969398413/1094939122990334053/Vector.png" alt="" />
                <h2 className='lg:text-4xl text-2xl font-semibold mb-5 lg:ml-36 ml-5'>Applied Jobs</h2>
            </div>

            <div className='lg:w-2/3 p-3 mx-auto lg:mt-28 mt-10'>

                {
                    applications.map(application => <Applications application={application} key={application.id}></Applications>)

                }

            </div>
        </div>

    );
};

export default AppiliedJobs;