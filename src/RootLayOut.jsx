import React from 'react';
import NavBar from './NavBar';
import Frame from './Frame';
import { Outlet } from 'react-router-dom';

const RootLayOut = () => {
    return (
        <div>
            
        <NavBar></NavBar>
        <Frame></Frame>
       
        </div>
    );
};

export default RootLayOut;