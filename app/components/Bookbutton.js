"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function Bookbutton({ title, author, image, description }) {
  // State to toggle modal width
  const [isWide, setIsWide] = useState(false);

  // Function to handle modal width toggle
  const toggleWidth = () => {
    setIsWide((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center py-1 w-auto sm:w-[15rem] h-auto ml-3">
      <Modal>
        <ModalTrigger
          className="flex justify-center text-white border border-theme-dark-Blue dark:bg-white dark:text-black group/modal-btn"
          onClick={toggleWidth} // Trigger the width toggle
        >
          <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
            Details
          </span>
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
            📚
          </div>
        </ModalTrigger>
        <ModalBody className={`flex items-center justify-center w-full h-full border bg-DarkColor border-theme-dark-Blue`}>
          <ModalContent className={`h-full overflow-auto ${isWide ? 'w-3/4' : 'w-full'}`}> {/* Adjust width based on state */}
            <h4 className="mb-8 text-lg font-bold text-center text-white md:text-2xl">
              {title}             
            </h4>
            <div className="flex items-center justify-center">
              <motion.div className="flex-shrink-0 p-1 mt-4 -mr-4 overflow-hidden border rounded-xl border-theme-dark-Blue">
                <Image
                  src={image}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="flex-shrink-0 object-cover w-20 h-20 rounded-lg md:h-40 md:w-40" 
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-8 mt-10 text-white">
              <div className="flex">
                <p className="font-bold">Author:</p>
                <p>{author}</p>
              </div>
              <div className="flex gap-5">
                <p className="font-bold">Description:</p>
                <p>{description}</p>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Bookbutton;
