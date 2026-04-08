import React, { useState } from 'react';

const Contact = () => {
    const [error, setError] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        console.log(e.target.name.value); 
        if(e.target.name.value === "" || e.target.email.value === ""){
            setError("Please fill all the fields");
            return;
        }
        if(!error){
            console.log("Form submitted successfully");
        }
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

export default Contact;