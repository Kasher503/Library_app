import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footertop = () => {
  return (
    <>
    <div className="w-full lgl:py-10 lgl:px-24 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="flex flex-col w-full h-full gap-8 bg-DarkColor">
        <Image
          className="w-32"
          src="/assets/developer_logo.png"
          width={100}
          height={100}
          alt="Developer logo"
        />
        <div className="flex gap-4 text-white">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/kasher-shahzad-223579288/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bannerIcon hover:text-customBlue"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/Kasher503"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/kasher_shahzad/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl tracking-wider uppercase text-designColor">
        Kasher Shahzad
        </h3>
        <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
          <a href="https://www.kashershahzad.live" target="_blank">
            <li>
              <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
               My Website
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a href="https://www.kashershahzad.live/resume" target="_blank">
            <li>
              <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
                My Resume
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
          <a href="https://www.kashershahzad.live/contact" target="_blank">
            <li>
              <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
                Contact me
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl tracking-wider uppercase text-designColor">
          My Info
        </h3>
        <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
          <li>
            <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
              +92309-7962528
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
              gdemagv@gmail.com
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="relative w-full text-lg text-white duration-300 cursor-pointer hover:text-designColor group">
              Faisalabad, Pakistan
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full py-10 bg-DarkColor ">
      <p className="text-base text-center text-gray-500">
        © 2024. All rights reserved by Kasher Shahzad
      </p>
    </div>
    </>
  );
};

export default Footertop;
