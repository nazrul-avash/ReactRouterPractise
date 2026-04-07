import React from 'react';

const SideBar = () => {
    return (
        <div className='sidebar bg-amber-200 shadow-sm py-40'>
                    <ul className="menu bg-base-200 w-56 [&_li>*]:rounded-none p-0">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    </ul>
        </div>
    );
};

export default SideBar;