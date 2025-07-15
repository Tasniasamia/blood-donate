import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-5 md:px-8 xl:px-0 2xl:max-w-[1920px] max-w-[1320px] mx-auto my-10 xl:my-[120px] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[860px_1fr] gap-10 xl:gap-[102px]">
      {/* Left image section */}
      <div className="relative sm:block hidden w-full lg:w-full md:w-[600px] sm:w-[500px] mx-auto h-[400px]  sm:h-[500px] md:h-[600px] lg:h-[700px] 2xl:h-[761px]">
        {/* Green ellipse */}
        <div className="absolute top-[90px] right-5 sm:top-[60px] md:top-[100px] md:right-[100px] sm:right-10 lg:top-[130px] lg:right-[18px] xl:top-[50px] xl:right-[44px] h-[60px] w-[120px] sm:h-[80px] sm:w-[160px] xl:h-[100px] xl:w-[200px] bg-green-vertical rounded-t-full" />
        
        {/* Orange ellipse */}
        <div className="absolute xl:bottom-[180px] lg:left-0 lg:bottom-[220px] md:bottom-[120px] xl:left-[50px] bottom-[90px] left-5 sm:bottom-[80px] sm:left-10 2xl:bottom-[100px] 2xl:left-[68px] h-[60px] w-[120px] sm:h-[80px] sm:w-[160px] xl:h-[100px] xl:w-[200px] bg-orange-vertical rounded-b-full" />

        {/* Top image */}
        <Image
          src="/images/about1.png"
          alt="about"
          className="absolute  lg:top-0 lg:left-0 z-20 object-fill border-r-[10px] border-b-[10px] xl:border-r-[20px] xl:border-b-[20px] border-white w-[220px] h-[260px] sm:w-[240px] sm:h-[340px] md:w-[300px] md:h-[400px] xl:w-[300px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[560px]"
          width={500}
          height={560}
        />

        {/* Bottom image */}
        <Image
          src="/images/about2.png"
          alt="about"
          className="absolute right-0 2xl:bottom-0 bottom-0 sm:right-0 xl:bottom-[80px] lg:bottom-[60px] md:right-0  lg:right-0 z-10 object-fill border-l-[10px] border-t-[10px] xl:border-l-[20px] xl:border-t-[20px] border-white w-[220px] h-[260px] sm:w-[280px] sm:h-[360px] md:w-[350px] md:h-[420px]  lg:w-[300px] xl:w-[350px] xl:h-[450px] 2xl:w-[450px] 2xl:h-[590px]"
          width={500}
          height={590}
        />
      </div>

      {/* Right content section */}
      <div className="w-full 2xl:max-w-[622px]">
        {/* Subtitle */}
        <h5 className="font-nunito font-semibold mb-2 text-[18px] sm:text-[22px] xl:text-[26px] bg-orange-vertical bg-clip-text text-transparent">
          Welcome to Charius
        </h5>

        {/* Title */}
        <h1 className="font-nunito font-bold text-text_primary text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] xl:text-[60px] 2xl:text-[70px] leading-tight">
          You’re the Hope of Others.
        </h1>

        {/* Paragraph */}
        <p className="font-roboto text-text_secondary font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed pt-5 pb-6 sm:pt-6 sm:pb-8">
          Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu neque sit etiam nec
          quisque. Cras quam dignissim blandit metus laoreet mi ut. Eget diam volutpat ultrices
          massa morbi sed nibh. Sodales diam eu etiam eu quam nisl viverra...
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Mission */}
          <div className="flex gap-4 sm:gap-5 items-start">
            <div className="h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-full p-1 bg-orange-vertical shrink-0">
              <div className="bg-white h-full w-full rounded-full grid place-items-center">
                <Image
                  src="/images/vector1.png"
                  width={40}
                  height={40}
                  alt="vector"
                  className="h-[28px] w-[28px] xl:h-[40px] xl:w-[40px] object-fill"
                />
              </div>
            </div>
            <div>
              <h4 className="font-nunito font-bold text-[18px] sm:text-[22px] xl:text-[25px] mb-1">
                Our Mission
              </h4>
              <p className="font-roboto text-text_secondary text-[14px] sm:text-[16px] xl:text-[18px]">
                We believe charity is a lifetime investment.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex gap-4 sm:gap-5 items-start">
            <div className="h-[60px] w-[60px] xl:h-[80px] xl:w-[80px] rounded-full p-1 bg-blue-vertical-gradient shrink-0">
              <div className="bg-white h-full w-full rounded-full grid place-items-center">
                <Image
                  src="/images/vector2.png"
                  width={40}
                  height={40}
                  alt="vector"
                  className="h-[28px] w-[28px] xl:h-[40px] xl:w-[40px] object-fill"
                />
              </div>
            </div>
            <div>
              <h4 className="font-nunito font-bold text-[18px] sm:text-[22px] xl:text-[25px] mb-1">
                Our Vision
              </h4>
              <p className="font-roboto text-text_secondary text-[14px] sm:text-[16px] xl:text-[18px]">
                We believe charity is a lifetime investment.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 sm:mt-10 xl:mt-[49px] bg-orange-vertical px-6 sm:px-[40px] xl:px-[45px] py-3 sm:py-4 text-white font-roboto font-semibold text-[16px] sm:text-[18px] xl:text-[20px] rounded-full">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;
