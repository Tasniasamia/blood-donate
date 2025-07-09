"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaHeart, FaRegUser, FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuTl = useRef(gsap.timeline({ paused: true }));
  const navRef = useRef(null);
  // const btnRef = useRef(null);

  // ---- Animations ----------------------------------------------------------

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       paused: true,
  //       defaults: { ease: "power2.out" },
  //     });

  //     tl.to(btnRef.current, {
  //       width: 180,
  //       duration: 0.4,
  //     })
  //       .to(
  //         ".donate-text",
  //         {
  //           opacity: 1,
  //           x: 0,
  //           duration: 0.3,
  //         },
  //         "-=0.25"
  //       )
  //       .to(
  //         ".heart-icon",
  //         {
  //           x: -10,
  //           duration: 0.3,
  //         },
  //         "<"
  //       );

  //     const el = btnRef.current;
  //     const handleEnter = () => tl.play();
  //     const handleLeave = () => tl.reverse();

  //     el.addEventListener("mouseenter", handleEnter);
  //     el.addEventListener("mouseleave", handleLeave);

  //     return () => {
  //       el.removeEventListener("mouseenter", handleEnter);
  //       el.removeEventListener("mouseleave", handleLeave);
  //     };
  //   }, btnRef);

  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // logo drop‑in
      const introTl = gsap.timeline();
      introTl
        .from(".logo", {
          y: -30,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        })
        .from(".text-link", {
          opacity: 0,
          duration: 0.25,
          stagger: 0.15,
        })
        .from(".icon", {
          opacity: 0,
          duration: 0.25,
          stagger: 0.15,
        });
      // slide‑in side‑menu
      menuTl.current
        .clear()
        .to("#mobile", { right: 0, duration: 0.5, ease: "power2.out" })
        .from("#mobile li", {
          x: 60,
          opacity: 0,
          duration: 0.25,
          stagger: 0.15,
        });
    }, navRef);

    return () => ctx.revert(); // cleanup on route‑change/unmount
  }, []);

  // ---- Handlers ------------------------------------------------------------
  const openMenu = () => {
    setMenuOpen(true);
    menuTl.current.play(0);
  };

  const closeMenu = () => {
    menuTl.current.reverse();
    menuTl.current.eventCallback("onReverseComplete", () => setMenuOpen(false));
  };

  // ---- JSX -----------------------------------------------------------------
  return (
    <div className="bg-[#FBF8F2]">
    <nav
      ref={navRef}
      className="header-container  2xl:pt-[34px] pt-[15px] relative z-20"
    >
      {/* top row */}
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={242}
            height={68}
            className="logo w-[150px] 2xl:w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* desktop links */}
        <ul className="hidden xl:flex gap-10 font-roboto items-center">
          {["Home", "News", "Pages", "Donations", "Events", "Contact Us"].map(
            (label) => (
              <li key={label}>
                <Link
                  href="/"
                  className="text-text_secondary text-link text-[18px] uppercase hover:font-bold py-3 px-2"
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* icons + donate */}
        <div className="flex items-center gap-6  ">
          <CiSearch className=" icon md:text-[28px] text-2xl cursor-pointer hover:text-[#ED861D]" />
          <FaRegUser className=" icon md:text-[28px] text-2xl cursor-pointer hover:text-[#ED861D]" />

          {/* donate button */}
          <button className="icon bg-custom-gradient xl:flex rounded-full hidden items-center text-white px-2 py-1">
          <span className="grid place-items-center w-10 h-10 rounded-full  bg-[#FBF8F2] mr-2">
                  <img src="/images/heart.png"height={100} width={100} alt="heart" className="h-[20px] w-[20px] object-fill"/>
                </span>
            <span className="text-lg font-bold font-nunito pr-4">
              Donate&nbsp;now
            </span>
          </button>
          {/* <button
            ref={btnRef}
            style={{ width: "48px" }}
            className="bg-custom-gradient flex items-center rounded-full 
                 overflow-hidden text-white h-12 pl-0 pr-4"
          >
            <span className="grid place-items-center w-12 h-12 bg-[#FBF8F2] rounded-full">
              <img
                src="/images/heart.png"
                alt="heart"
                className="w-[20px] h-[20px] object-fill heart-icon"
              />
            </span>

            <span className="donate-text opacity-0 translate-x-2 text-lg font-bold font-nunito">
              Donate&nbsp;now
            </span>
          </button> */}
        
          {/* hamburger */}
          <FaBars
            className="xl:hidden h-6 w-6 cursor-pointer"
            onClick={openMenu}
          />
        </div>
      </div>

      {/* mobile side‑panel */}
      <aside
        id="mobile"
        className="fixed top-0 right-[-100%] w-4/5 sm:w-2/5 h-full bg-[#FBF8F2] shadow-lg py-12 z-30"
      >
        <IoMdClose
          className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
          onClick={closeMenu}
        />

        <ul className="flex flex-col gap-6 px-8 mt-10">
          {["",  "News", "Pages", "Donations", "Events", "Contact Us"].map((p) => (
            <li key={p}>
              <Link
                href={`/${p}`}
                className={`block text-lg ${
                  pathname === `/${p}` ? "text-primary" : "hover:text-primary"
                }`}
              >
                {p === "" ? "Home" : p.charAt(0).toUpperCase() + p.slice(1)}
              </Link>
            </li>
          ))}
          <li className="w-full">
            <div className="bg-custom-gradient  block w-fit rounded-full  items-center  px-2 py-1">
              <div className="flex items-center">
                <span className="grid place-items-center w-10 h-10 rounded-full  bg-[#FBF8F2] mr-2">
                  <img
                    src="/images/heart.png"
                    height={100}
                    width={100}
                    alt="heart"
                    className="h-[20px] w-[20px] object-fill"
                  />
                </span>
                <div className="text-lg text-white font-bold font-nunito pr-4">
                  Donate now
                </div>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </nav>
    </div>
  );
};

export default Navbar;
