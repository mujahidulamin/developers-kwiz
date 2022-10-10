import React from 'react';
import Option from '../Option/Option'

const Question = ({ question }) => {
    console.log(question);
    return (
        <div className='bg-cyan-200 p-5 w-9/12 m-auto my-4 rounded-3xl'>
            <p className='text-center'>Quiz: {question.question}</p>
            <div className=' text-center my-8 gap-5 grid grid-cols-2'>
            { 
                question.options.map(option => <Option
                    option = {option}
                ></Option>)
            }

            </div>
        </div>
    );
};

export default Question;