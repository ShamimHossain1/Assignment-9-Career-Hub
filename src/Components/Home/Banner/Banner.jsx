import { Button } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }} className='flex px-72 items-center' >
            <div>

                <h2 className='text-7xl font-bold mb-2'>One Step</h2>
                <h2 className='text-7xl font-bold mb-2'>Closer To Your</h2>
                <h2 className='text-7xl font-bold mb-8 text-indigo-500'>Dream Job</h2>
                <p className='mb-5 leading-7 text-gray-500' >Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <Button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='px-2 py-2'>Get Started</Button>
            </div>
            <div>
                <img src="https://cdn.discordapp.com/attachments/1094672876969398413/1094712272192016425/P3OLGJ1_copy_1.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;