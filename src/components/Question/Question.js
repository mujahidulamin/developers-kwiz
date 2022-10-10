import React from 'react';
import Option from '../Option/Option'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ question }) => {
    console.log(question);
    const {correctAnswer} = question
    const handleRightAnswer = () => {
        toast.info(correctAnswer, {autoClose: 500})
    }


    return (
        <div className='bg-cyan-200 p-5 w-9/12 m-auto my-4 rounded-3xl'>
            <ToastContainer position='top-center'></ToastContainer>
            <div className='flex justify-center'>
                <p className='text-center'>Quiz: {question.question}
                </p>
               <button onClick={handleRightAnswer}><i className="fa-solid fa-eye ml-16"></i></button>
            </div>

            <div className=' text-center my-8 gap-5 grid grid-cols-2'>
                {
                    question.options.map(option => <Option
                        option={option}
                        question={question}
                    ></Option>)
                }

            </div>
        </div>
    );
};

export default Question;