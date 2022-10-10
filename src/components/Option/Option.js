import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, question }) => {
    console.log(option);
        const {correctAnswer} = question
        // console.log(correctAnswer);
    const handleAnswerQuestion = () => {
        if(correctAnswer === option){
            toast.success('Your Answer is Correct', {autoClose: 500})
        }else{
            toast.error('Your Answer is Incorrect', {autoClose: 500})
        }
    }

    return (
        <div className='bg-white my-3 rounded p-2 hover'>
            <label className='radio'>
                <ToastContainer position='top-center'></ToastContainer>
                <input onClick={handleAnswerQuestion} className='mr-2' type="radio" value="Male" name="gender" />{option}
            </label>
        </div>
    );
};

export default Option;