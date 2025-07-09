import React from 'react';
import ServiceCard from '../../card/serviceCard';

const Service = () => {
    const data=[
        {
            name:"Become a volunteer",
            description:"Alone, I can do little. Together, we can do anything "
        },
        {
            name:"Quick fundraising",
            description:"Alone, I can do little. Together, we can do anything "
        },
        {
            name:"Start donating",
            description:"Alone, I can do little. Together, we can do anything "
        }
    ]
    return (
        <div className='max-w-[1320px] mx-auto grid grid-cols-3 gap-[30px] pt-[60px] bg-white'>
           
            <ServiceCard gradient2={"bg-blue-vertical-gradient"} data={data[0]} gradient={"#F5FDFF"} image={"/images/service-1.png"} />
        </div>
    );
};

export default Service;