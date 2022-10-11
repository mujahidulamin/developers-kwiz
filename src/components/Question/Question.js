import React from 'react';
import Option from '../Option/Option'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ question }) => {
    console.log(question);
    
    const { correctAnswer } = question
    let splitQuestion;
    splitQuestion = question.question.split('<p>')
    let againSplitQuestion = splitQuestion[1].split('</p>')


    const handleRightAnswer = () => {
        toast.info(correctAnswer, { autoClose: 900 })
    }

    return (
        <div className='bg-cyan-200 p-5 w-10/12 m-auto my-12 rounded-3xl'>
            <ToastContainer position='top-center'></ToastContainer>

            <p className='text-center text-2xl font-bold'>
                 {againSplitQuestion[0]}
            </p>

            <span className='flex justify-end'>
                <button onClick={handleRightAnswer}><i className="fa-solid fa-eye"></i></button>
            </span>

            <div className=' text-center my-8 gap-5 grid grid-cols-2'>
                {
                    question.options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        question={question}
                    ></Option>)
                }

            </div>
        </div>
    );
};

export default Question;