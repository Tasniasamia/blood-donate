import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="header-container 2xl:pt-[34px] pt-[15px] ">
      <div className="flex justify-between items-center">
        <Image
          src="/images/logo.png"
          href="/"
          alt="logo"
          width={242}
          height={68}
          className="cursor-pointer 2xl:w-auto w-[150px]"
        />
        <ul className="list-none flex gap-[40px] font-roboto items-center">
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              Donations
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" text-text_secondary tracking-normal font-normal text-[18px] uppercase hover:font-bold py-3 px-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-[25px]">
          <CiSearch className="icon-hover text-[28px] min-w-[28px] min-h-[28px] text-[#444444] cursor-pointer hover:text-[#ED861D]" />
          <FaRegUser className="icon-hover text-[28px] min-w-[28px] min-h-[28px] text-black cursor-pointer hover:text-[#ED861D]" />
          <button className="donate-button bg-custom-gradient rounded-full flex items-center text-white px-[7px] py-[5px]">
            <div className="grid place-items-center w-[42px] h-[42px] rounded-full bg-white mr-3">
              <FaHeart className="text-xl text-[#ED861D]" />
            </div>
            <span className="text-lg font-bold pe-[24px] font-nunito">
              Donate now
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
