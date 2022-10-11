import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData()
    console.log(quiz);
    
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mb-8 mt-12'>Quiz of {quiz.data.name}</h2>
            <div className=''>
                {
                    quiz.data.questions.map(question => <Question
                        key={question.id}
                        className='text-center'
                        question={question}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;