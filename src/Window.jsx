import React from 'react';

const Window = () => {
    return (
        <div className='w-full'>
           <div className=' shadow-sm p-5  flex gap-10 flex justify-center'>
            <button className='btn'>Home</button>
            <button className='btn'>About</button>
            <button className='btn'>Contact</button>
            <button className='btn'>Info</button>
            <button className='btn'>Address</button>
           </div>
        </div>
    );
};

export default Window;