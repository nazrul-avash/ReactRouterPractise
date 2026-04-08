import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Window = () => {
    return (
        <div className='w-full'>
           <div className=' shadow-sm p-5  flex gap-10 flex justify-center'>
           <Link to="/frame/window" className="btn">Home</Link>
            <Link to="/frame/window/about" className="btn">About</Link>
            <Link to="/frame/window/contact" className="btn">Contact</Link> 
            <Link to="/frame/window/info" className="btn">Info</Link>
            <Link to="/frame/window/address" className="btn">Address</Link>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Window;