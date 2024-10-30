import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function Timelinepara() {
  const data = [
    {
      title: "Intuitive",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 lg:text-xl ">
            Libby makes it simple to listen read, where, and how you want..
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/img1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/img2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/img3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/img4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "User Friendly",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200  lg:text-xl">
            Browse or search to discover your next favorite book
          </p>
          <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 lg:text-xl">
            We think myLibrary is the simplest way to start reading from your
            library. Don't just take our word for it though, see what everyone
            else is saying!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/img5.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/img6.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Features",
      content: (
        <div>
          {/* <p className="mb-4 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Deployed 5 new components on Aceternity today
          </p> */}
          <div className="mb-8 ">
            <div className="flex items-center gap-2 text-xl text-white dark:text-neutral-300 lg:text-4xl ">
              ✅ Boosts vocabulary
            </div>
            <div className="flex items-center gap-2 text-xl text-white dark:text-neutral-300 lg:text-4xl">
              ✅ Enhances focus
            </div>
            <div className="flex items-center gap-2 text-xl text-white dark:text-neutral-300 lg:text-4xl">
              ✅ Strengthens memory
            </div>
            <div className="flex items-center gap-2 text-xl text-white dark:text-neutral-300 lg:text-4xl">
              ✅ Stimulates imagination
            </div>
            <div className="flex items-center gap-2 text-xl text-white text-whitedark:text-neutral-300 lg:text-4xl">
              ✅ Boosts comprehension
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default Timelinepara;
