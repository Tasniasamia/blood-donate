import React from "react";
import ServiceCard from "../../card/serviceCard";

const Service = () => {
  const data = [
    {
      name: "Become a volunteer",
      description: "Alone, I can do little.Together, we can do anything",
    },
    {
      name: "Quick fundraising",
      description: "Alone, I can do little.Together, we can do anything",
    },
    {
      name: "Start donating",
      description: "Alone, I can do little.Together, we can do anything",
    },
  ];
  return (
    <div className=" max-w-[1320px] lg:px-0 px-[20px] lg:mb-[120px] mb-[60px] mx-auto sm:grid-cols-2 grid-cols-1 grid lg:grid-cols-3 gap-[30px] pt-[60px] ">
      <ServiceCard
        gradient2={"bg-blue-vertical-gradient"}
        data={data[0]}
        gradient={"bg-[#F5FDFF]"}
        image={"/images/service-2.png"}
      />
      <ServiceCard
        gradient2={"bg-orange-vertical"}
        data={data[1]}
        gradient={"bg-[#FFFCF4]"}
        image={"/images/service-3.png"}
      />
      <ServiceCard
        gradient2={"bg-green-vertical"}
        data={data[2]}
        gradient={"bg-[#F4FFFA]"}
        image={"/images/service-1.png"}
      />
    </div>
  );
};

export default Service;
