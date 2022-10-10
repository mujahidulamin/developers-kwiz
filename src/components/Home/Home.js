import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
const Home = () => {
    const quizes = useLoaderData()
    const allQuizes = quizes.data;

    return (
        <div>
            <h2 className='text-center text-5xl'>Quiz For Develop Yourself</h2>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    {
                        allQuizes.map(quiz => <Quiz
                            key={quiz}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;