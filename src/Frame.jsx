import React from 'react';
import SideBar from './SideBar';
import Window from './Window';
import { Outlet } from 'react-router-dom';

const Frame = () => {
    return (
        <div className='flex border'>
           <SideBar></SideBar>
           <Window></Window> 
           
         
        </div>
    );
};

export default Frame;
