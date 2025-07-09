import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-0 px-[20px] max-w-[1920px]  mx-auto lg:my-[120px] my-[60px] grid grid-cols-[860px_1fr] gap-[102px] ">
      <div className="relative  w-full   h-[761px]">
        <div className="h-[100px] w-[200px] rounded-t-full bg-green-vertical absolute top-[70px] right-[44px] " />
        <div className="h-[100px] w-[200px] rounded-b-full bg-orange-vertical absolute bottom-[100px] left-[68px] " />

        <Image
          src="/images/about1.png"
          alt="about"
          className="h-[560px] border-r-[20px] border-b-[20px] border-white  absolute top-0 z-20 left-0 w-[500px] object-fill"
          width={1000}
          height={1000}
        />
        <Image
          src="/images/about2.png"
          alt="about"
          className="h-[590px] border-s-[20px] border-t-[20px] border-white absolute bottom-0 z-10 right-0 w-[450px] object-fill"
          width={1000}
          height={1000}
        />
      </div>
      <div className="bg-green-300 2xl:max-w-[622px]">
        <h5 className="font-nunito font-semibold mb-[9px] text-[26px] leading-[100%] tracking-[0%] bg-orange-vertical bg-clip-text text-transparent">
          Welcome to Charius
        </h5>
        <h1 className="font-nunito xl:w-[622px] w-full text-text_primary pt-[16px] pb-[43px] font-bold text-[32px] sm:text-[40px] md:text-[50px] mb-[34px] lg:text-[60px] xl:text-[70px] leading-[100%] tracking-[0%]">
          You’re the Hope of Others.
        </h1>
        <p className="font-roboto pb-[64px] text-text_secondary font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] tracking-[0%]">
          Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu
          neque sit etiam nec quisque. Cras quam dignissim blandit metus laoreet
          mi ut. Eget diam volutpat ultrices massa morbi sed nibh. Sodales diam
          eu etiam eu quam nisl viverra. Eget egestas orci felis nisl. Sit diam
          morbi amet viverra auctor nunc. Feugiat ac amet aliquet euismod ut
          vel. Mi lectus nisl augue commodo vitae nisi blandit. Venenatis netus
          suscipit tempus fringilla varius feugiat nulla proin.
        </p>
      </div>
    </div>
  );
};

export default About;
