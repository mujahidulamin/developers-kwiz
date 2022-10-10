import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';






const Charts = () => {
    const courses = useLoaderData()
    console.log(courses);
    const course = courses.data;


    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-4'>Line Chart With Name, Id and Total</h2>
            <div className='grid md:grid-cols-2 mt-28'>
            {
                course.map(courseData => <Chart
                key={courseData.id}
                courseData = {courseData}
                ></Chart>)
            }
        </div>
        </div>
    );
};

export default Charts;