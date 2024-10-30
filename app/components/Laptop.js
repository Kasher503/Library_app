import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

const Laptop = () => {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] w-full  bg-DarkColor lg:mt-8">
      <MacbookScroll
        title={
          <span className="text-4xl text-white xs:text-3xl sm:text-4xl md:text-5xl mdl:text-6xl lg:text-6xl lgl:text-7xl xl:text-8xl">
            Step into
            <span className="relative text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              Digital <br /> World!
            </span>
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="w-10 h-10 transform -rotate-12" />
          </Link>
        }
        src="/assets/laptop.jpg"
        showGradient={false}
      />
    </div>
  );
};

const Badge = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    ></svg>
  );
};

export default Laptop;
