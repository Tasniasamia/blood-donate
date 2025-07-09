import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#FBF8F2]">
    <div className="max-w-[1320px] mx-auto pt-[35px] lg:px-0 px-[20px]  lg:mb-[98px] mb-[60px]">
      <div className="grid w-fit mx-auto gap-[15px] 2xl:grid-cols-[708px_965px] xl:grid-cols-[600px_600px]  grid-cols-1">
        <div >
          <div>
            <h3 className="font-roboto font-normal text-[30px] leading-[100%] tracking-[0%] title">
              Give them a chance.
            </h3>
            <h1 className="font-nunito text-text_primary pt-[16px] pb-[43px] font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[100%] tracking-[0%]">
              Believe in The Better Future of Others.
            </h1>
            <p className="font-roboto pb-[64px] text-text_secondary font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[0%]">
              Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus
              tellus dui gravida. Sed at a massa nunc at.
            </p>
          </div>
          <div className="flex gap-[31px]">
            <div className="relative w-fit h-fit">
              <div className="bg-gradient-to-b from-[#EBB011] to-[#ED861D] rounded-full h-[57px] w-[57px] grid place-items-center absolute -translate-x-1/2 left-1/2 -transtale-y-1/2 bottom-1/3">
                <div className="h-[55px] grid place-items-center  bg-white w-[55px] rounded-full ">
                  <FaPlay className="text-[18px] text-[#EBB011]" />
                </div>
              </div>
              <div class="bg-gradient-to-b from-[#EBB011] to-[#ED861D] rounded-[10px]  h-[202px] w-[202px] ">
                <Image
                  src="/images/video_image.png"
                  alt="image"
                  width={500}
                  height={500}
                  className="w-[200px] h-[200px] object-fill"
                />
              </div>
            </div>

            <div>
              <h4 className="font-nunito mb-[20px] font-bold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[100%] tracking-[0%]">
                Join Our Upcoming Campaign
              </h4>
              <p className="font-roboto font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[0%] text-text_secondary">
                Make an impact one piece of clothing at a time to need of
                others.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[550px] sm:h-[600px] md:h-[680px] lg:h-[720px] xl:h-[765px]">
{/* Stat Box */}
<div className="rounded-[20px] w-fit bg-white py-[30px] pe-[45px] ps-[30px] absolute 2xl:bottom-[79px] bottom-[0px] z-30  left-[30px]">
<div className="flex gap-[18px]">
  <div className="h-[80px] w-[80px] bg-[#EFF4FF] grid place-items-center rounded-full ">
    <Image
      src="/images/stick_man.png"
      alt="image"
      width={40}
      height={40}
      className="h-[40px] w-[40px] object-fill"
    />
  </div>

  <div>
    <h5 className="text-[#16182F] font-nunito font-bold text-[45px] leading-[100%] tracking-[0%]">
      120+
    </h5>
    <p className="font-roboto font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[0%] text-text_secondary">
      Happy Volu nteer
    </p>
  </div>
</div>

<div className="flex -space-x-1 overflow-hidden mt-[18px]">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    className="inline-block size-[56px]  rounded-full ring-2 ring-white"
  />
  <img
    alt=""
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    className="inline-block size-[60px]  rounded-full ring-2 ring-white"
  />
  <img
    alt=""
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
    className="inline-block size-[60px] rounded-full ring-2 ring-white"
  />
  <img
    alt=""
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    className="inline-block size-[60px] rounded-full ring-2 ring-white"
  />
  <img
    alt=""
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    className="inline-block size-[60px] rounded-full ring-2 ring-white"
  />
</div>
</div>

{/* Hero Images */}
<Image
  src="/images/hero_image2.png"
  width={500}
  height={500}
  className="absolute w-[280px] sm:w-[350px] lg:w-[400px] lg:h-[400px]  2xl:w-[418px] h-[280px] sm:h-[350px] 2xl:h-[418px] z-20 border-[#FBF8F2] rounded-full border-[16px] object-fill"
  alt="hero overlay"
/>
<Image
  src="/images/hero_image1.png"
  width={687}
  height={687}
  className="absolute w-[400px] sm:w-[500px] md:w-[600px] lg:w-[687px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[687px] z-10 rounded-full object-fill right-0 bottom-0"
  alt="hero main"
/>
</div> 

      </div>
    </div>
    </div>
  );
};

export default Banner;


 