import React, { useEffect, useState } from 'react';
import Job from './JOBS/Jobs';


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
        },[])
    // console.log(jobs)
    return (
        <div>
            <div className='text-center mt-28 mb-16'>
                <h2 className='text-5xl font-semibold mb-5'>Featured Jobs</h2>
                <p className='text-gray-500 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className='grid grid-cols-2 gap-6 px-72 mb-20'>
                {
                   
                    jobs.map(job=><Job
                    key={job.id}
                    job={job}
                    ></Job>)

                }
            </div>

        </div>
    );
};

export default FeaturedJobs;