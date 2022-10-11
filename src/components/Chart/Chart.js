import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, } from 'recharts';

const Chart = ({ courseData }) => {
    const { name, total, id } = courseData

    console.log(total, name);
    const data = [
        {
            question: total,
            name: name,
            id: id,
        },
    ];


    return (
        <div className='ml-4'>
            <LineChart width={350} height={300} data={data}>
                <Line type="monotone" dataKey="question" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis dataKey="question" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;