import Navbar from '@/components/(site)/layout/navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default layout;