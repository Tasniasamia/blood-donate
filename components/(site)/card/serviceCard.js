import Image from "next/image";
import React from "react";

const ServiceCard = ({ data, image, gradient, gradient2 }) => {
  return (
    <div
      className={`${gradient} rounded-[15px] flex items-center gap-4 p-5`}
      style={{ boxShadow: "0px 2px 10px 0px #0004581A" }}
    >
      <div
        className={`${gradient2} rounded-[15px] h-[110px] w-[110px] grid place-items-center shrink-0`}
      >
        <Image
          src={image}
          width={60}
          height={60}
          alt="icon"
          className="object-contain h-[60px] w-[60px]"
        />
      </div>

      <div className="flex-1 overflow-hidden">
        <h4 className="text-text_primary font-nunito font-bold mb-[9px] text-[26px] leading-[100%] tracking-[0%] ">
          {data?.name}
        </h4>
        <p className="text-text_secondary  w-full font-roboto font-normal text-[16px] sm:text-[18px]  leading-[26px] sm:leading-[30px] tracking-[0%] ">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
