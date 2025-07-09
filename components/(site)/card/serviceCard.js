import Image from "next/image";
import React from "react";

const ServiceCard = ({ data, image, gradient, gradient2 }) => {
  return (
    <div
      className={`p-[20px] ${gradient} rounded-[15px] flex gap-[22px] items-center`}
    >
      <div
        className={`${gradient2} rounded-[15] w-[60px] h-[60px] grid place-items-center`}
      ></div>
      <Image src={image} width={1000} height={1000} className="object-fill" />
      <div>
        <h4 className="text-text_primary font-nunito font-bold text-[26px] leading-[100%] tracking-[0%]">
          {data?.name}
        </h4>
        <p className="text-text_secondary font-roboto font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[30px] tracking-[0%]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
