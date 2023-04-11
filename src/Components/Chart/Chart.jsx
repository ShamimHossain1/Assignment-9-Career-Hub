import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';




const Chart = () => {

    const AssignmentNumbers = [
        {
          subject: 'A1',
          Got:60,
          fullMark: 60,
        },
        {
          subject: 'A2',
          Got:60,
          fullMark: 60,
        },
        {
          subject: 'A3',
          Got:57,
          fullMark: 60,
        },
        {
          subject: 'A4',
          Got:60,
          fullMark: 60,
        },
        {
          subject: 'A5',
          Got:58,
          fullMark: 60,
        },
        {
          subject: 'A6',
         Got:59,
         
          fullMark: 60,
        },
        {
          subject: 'A7',
         Got:60,
         
          fullMark: 60,
        },
        {
          subject: 'A8',
         Got:59,
         
          fullMark: 60,
        },
      ];
   
    return (
        <div>
             <h3 className='text-center mt-10 text-2xl font-semibold'>My 8 Assignment Numbers</h3>
        <div className='lg:border border-cyan-400 md:w-2/3  md:mx-auto my-10 rounded-lg md:p-5 mx-3'>
            <ResponsiveContainer width="100%" height={400} >

            <RadarChart outerRadius={150} data={AssignmentNumbers}>
          <PolarGrid />
          <Legend></Legend>
          <Tooltip></Tooltip>
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Number" dataKey="Got" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
            </ResponsiveContainer>

        </div>
        </div>





    );
};

export default Chart;