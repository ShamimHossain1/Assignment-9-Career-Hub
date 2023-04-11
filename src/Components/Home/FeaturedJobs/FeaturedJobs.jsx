import React, { useEffect, useState } from 'react';
import Job from './JOBS/Jobs';
import { Button } from 'flowbite-react';


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [visible, setVisible] = useState(4)
    const [show, setShow] = useState(true)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    // console.log(jobs)

    const showMore = () => {
        setVisible(6)
        setShow(false)

    }
      
        

    return (
        <div>
            <div className='text-center lg:mt-28 mt-16 mb-16'>
                <h2 className='text-5xl  font-semibold mb-5'>Featured Jobs</h2>
                <p className='text-gray-500 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className='lg:grid grid-cols-2 gap-6 lg:px-72 px-5 mb-10'>
                {

                    jobs.slice(0, visible).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)

                }
            </div>
               
           <div>
           {
                show?<Button onClick={showMore} style={{ background: ' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)' }} className='px-8 py-2 mx-auto mb-20' >Show More</Button>:null
            }
           </div>
               


        </div>
    );
};

export default FeaturedJobs;