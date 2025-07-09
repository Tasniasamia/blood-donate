import About from '@/components/(site)/home/home1/about';
import Banner from '@/components/(site)/home/home1/banner';
import Service from '@/components/(site)/home/home1/service';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <About/>
        </div>
    );
};

export default page;