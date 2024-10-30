"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../../lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";

export const MacbookScroll = ({ src, showGradient, title, badge }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[100vh]  flex flex-col items-center  justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.80] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-10 text-xl font-bold text-center sm:mb-12 md:mb-16 lg:mb-20 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white text-neutral-800"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>

      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="relative w-full h-10">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden  h-full">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 w-full h-40 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <Image
          src={src}
          alt="aceternity logo"
          fill
          className="absolute inset-0 object-cover object-left-top w-full h-full rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32  rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>

        <KBtn
          className="your-class-name"
          childrenClassName="your-children-class-name"
        >
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F1</span>
        </KBtn>

        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded" // Replace with your desired styles
          childrenClassName="flex flex-col items-center" // Replace with your desired styles for children
        >
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F2</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconTable className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F3</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F4</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F5</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F6</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F7</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F8</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F9</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F10</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F11</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F12</span>
        </KBtn>
        <KBtn
          className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
            <div className="w-full h-full bg-black rounded-full" />
          </div>
        </KBtn>
      </Row>
      {/* Second row */}
      <Row>
        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded" // Replace with your desired styles
          childrenClassName="flex flex-col items-center" // Replace with your desired styles for children
        >
          <span className="block">~</span>
          <span className="block mt-1">`</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">!</span>
          <span className="block">1</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">+</span>
          <span className="block">=</span>
        </KBtn>

        <KBtn
          className="w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </Row>
      {/* Third row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded" // Adjust styles as needed
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">Q</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">W</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">E</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">R</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">T</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">Y</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">U</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">I</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">O</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">P</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </Row>
      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded" // Adjust styles as needed
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">A</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">S</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">D</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">F</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">G</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">H</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">J</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">K</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">L</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>

        <KBtn
          className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </Row>
      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">Z</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">X</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">C</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">V</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">B</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">N</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">M</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>

        <KBtn
          className="flex flex-col items-center justify-center w-10 h-10 bg-blue-500 text-white rounded"
          childrenClassName="flex flex-col items-center"
        >
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>

        <KBtn
          className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>
      {/* sixth Row */}
      <Row>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex justify-start w-full pl-1">
            <IconWorld className="h-[6px] w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <IconChevronUp className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-end w-full pr-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-end w-full pr-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn
          className="w-[8.2rem] bg-blue-500 text-white rounded flex items-center justify-center" // Main button styles
          childrenClassName="flex flex-col items-center" // Styles for the children elements
        >
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F1</span>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <div className="flex justify-start w-full pl-1">
            <IconCommand className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex justify-start w-full pl-1">
            <OptionKey className="h-[6px] w-[6px]" />
          </div>
          <div className="flex justify-start w-full pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
          <div className="flex">
            <KBtn
              className="w-6 h-3"
              childrenClassName="flex items-center justify-center"
            >
              <IconCaretLeftFilled className="h-[6px] w-[6px]" />
            </KBtn>

            <KBtn
              className="w-6 h-3"
              childrenClassName="flex items-center justify-center"
            >
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KBtn>

            <KBtn
              className="w-6 h-3"
              childrenClassName="flex items-center justify-center"
            >
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}) => {
  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }) => {
  return (
    <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[0.5px] gap-[2px] mt-2 h-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
