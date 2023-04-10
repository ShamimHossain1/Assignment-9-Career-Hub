import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const JobCategory = () => {
    const [categories, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    })

    

    return (
        <div>


            <div className='text-center mt-24 mb-16'>
                <h2 className='text-5xl font-semibold mb-5'>Job Category List</h2>
                <p className='text-gray-500 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className='lg:flex justify-center gap-6 lg:px-80 px-5'>


                {
                    categories.map((category, idx) => <Job
                        category={category}
                        key={idx}
                    ></Job>)
                }

            </div>
        </div>


    );
};

export default JobCategory;