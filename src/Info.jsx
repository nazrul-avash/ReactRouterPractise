import React from 'react';
import  { useState } from 'react';

const Info = () => {
    const [error, setError] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name='name' className='input input-bordered w-full max-w-xs' />
                <input type="email" placeholder='Email' name='email' className='input input-bordered w-full max-w-xs' />
                <button className='btn'>Submit</button>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Info;