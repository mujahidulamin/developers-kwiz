import React from 'react';

const Option = ({ option }) => {
    console.log(option);
    return (
        <div className='bg-white my-3 rounded p-2'>
            <label className='radio'>
                <input className='mr-2' type="radio" value="Male" name="gender" />{option}
            </label>
        </div>
    );
};

export default Option;