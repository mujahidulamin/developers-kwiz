import { useLoaderData } from 'react-router-dom';
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Charts = () => {
    const courses = useLoaderData()

    let reactName = courses.data[0].name;
    let javaScriptName = courses.data[1].name;
    let cssName = courses.data[2].name;
    let gitName = courses.data[3].name;

    let reactTotal = courses.data[0].total;
    let javaScriptTotal = courses.data[1].total;
    let cssTotal = courses.data[2].total;
    let gitTotal = courses.data[3].total;

    const data = [
        {
            name: reactName,
            total: reactTotal,
        },
        {
            name: javaScriptName,
            total: javaScriptTotal,
        },
        {
            name: cssName,
            total: cssTotal,
        },
        {
            name: gitName,
            total: gitTotal,
        },
    ];






    return (
        <div>
            <h2 className='text-5xl text-center mt-12'>Line Chart With Name, Total</h2>
            <div className='mt-28 flex md:justify-center'>
                {/* {
                course.map(courseData => <Chart
                key={courseData.id}
                courseData = {courseData}
                ></Chart>)
            } */}
                    <LineChart
                        width={370}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="total"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
            </div>
        </div>
    );
};

export default Charts;