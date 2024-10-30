// ./components/HeroSection.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = ({ onVideoEnd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [Value, setValue] = useState("");
  const router = useRouter();

  const handleclick = () => {
    router.push(`/Search?value=${encodeURIComponent(Value)}`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    onVideoEnd();
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-search"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );

  const filterIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-adjustments-alt"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8h4v4h-4z" />
      <path d="M6 4l0 4" />
      <path d="M6 12l0 8" />
      <path d="M10 14h4v4h-4z" />
      <path d="M12 4l0 10" />
      <path d="M12 18l0 2" />
      <path d="M16 5h4v4h-4z" />
      <path d="M18 4l0 1" />
      <path d="M18 9l0 11" />
    </svg>
  );

  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnd}
        className="absolute inset-0 object-cover w-full h-full"
        style={{ zIndex: -1 }}
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={`absolute inset-0 bg-black opacity-40 ${
          videoEnded ? "hidden" : ""
        }`}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white ">
        <motion.h1
          className="mt-48 mb-6 text-6xl font-bold text-gray-100 md:mt-16 md:text-8xl"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 2.5 }}
        >
          My<span className="text-yellow-400">Library</span>
        </motion.h1>

        <motion.p
          className="max-w-lg px-8 text-gray-200 text-md mb-84 md:text-xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 2.5, delay: 0.2 }}
        >
          A place where books and sources of information are stored. We make it
          easier for people to get access to them for various purposes.
          Libraries are very helpful and economical too.
        </motion.p>

        <motion.div
          className="flex items-center py-2"
          initial="hidden"
          animate="visible"
          variants={inputVariants}
          transition={{ duration: 2.5, delay: 0.4 }}
        >
          <div className="relative form-control">
            <input
              type="text"
              placeholder="Search for the books...."
              className="w-full py-4 pl-4 pr-40 mt-8 text-black bg-white rounded-full"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />

            <div className="absolute inset-y-0 flex items-center mt-8 space-x-2 right-2">
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  tabIndex={0}
                  role="button"
                  className="m-1 text-black btn btn-ghost"
                  onClick={toggleDropdown}
                >
                  {filterIcon}
                </label>
                {isOpen && (
                  <ul className="dropdown-content menu rounded-box z-[1] w-92 p-2 shadow border bg-white mt-5">
                    <div className="flex gap-5 text-black">
                      <div>
                        <li>
                          <Link href="/Famous">Famous</Link>
                        </li>
                        <li>
                          <Link href="/Thriller">Thriller</Link>
                        </li>
                        <li>
                          <Link href="/Horror">Horror</Link>
                        </li>
                      </div>
                      <div>
                        <li>
                          <Link href="/Sports">Sports</Link>
                        </li>
                        <li>
                          <Link href="/Programming">Programming</Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                )}
              </div>
              <button
                className="px-4 text-black bg-yellow-300 rounded-full btn btn-ghost"
                onClick={handleclick}
              >
                {searchIcon}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
