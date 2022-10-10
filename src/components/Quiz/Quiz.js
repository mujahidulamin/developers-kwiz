import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({ quiz }) => {
    const {id, name, total, logo } = quiz;
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
            <img
                className='object-cover w-full mb-6 rounded shadow-lg xl:h-80'
                src={logo}
                alt=''
            />
            <div className='flex justify-between'>
                <span className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</span>
                <span className='text-gray-700 md:mt-2  font-bold '>Number Of Quiz: {total}</span>
            </div>
            <Link to={`/category/${id}`}>
                <button
                    type='button'
                    className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                >
                    Start Quiz
                </button>
            </Link>


        </div>
    );
};

export default Quiz;