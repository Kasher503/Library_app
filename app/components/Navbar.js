"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [Value, setValue] = useState("")
  const router = useRouter();

  const handleclick = () =>{
    router.push(`/Search?value=${encodeURIComponent(Value)}`)
  }
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const SearchIcon = (
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-search"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );

  const FilterIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-adjustments"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" />
      <path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" />
      <path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" />
    </svg>
  );

  const SaveIcon = (
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-bookmarks"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
      <path d="M11 3h5a3 3 0 0 1 3 3v11" />
    </svg>
  );

  return (
    <div className="shadow-md bg-DarkColor navbar">
      <div className="flex-1">
        <a
          className="flex items-center ml-5 text-xl font-semibold text-primary "
          href="/"
        >
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-DarkColor ">myLibrary</span>
        </a>
      </div>

      <div className="flex items-center py-2">
        <div className="relative form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-xs pr-24 text-white border border-white input input-bordered bg-DarkColor"
            value={Value}
            onChange={(e)=>setValue(e.target.value)}
          />
          <div className="absolute inset-y-0 flex items-center space-x-2 right-2 ">
            <button className="px-2 text-white btn btn-ghost" onClick={handleclick}>{SearchIcon}</button>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label
                tabIndex={0}
                role="button"
                className="m-1 text-white btn btn-ghost"
                onClick={toggleDropdown}
              >
                {FilterIcon}
              </label>
              {isOpen && (
                <ul className="dropdown-content menu rounded-box z-[1] w-92 p-2 shadow border border-theme-dark-Blue bg-DarkColor">
                  <div className="flex gap-5 text-white">
                    <div className="text-white">
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
          </div>
        </div>
      </div>

      {/* <div className="flex-none ml-4">
        <button className="btn btn-ghost">{SaveIcon}</button>
      </div> */}
    </div>
  );
};

export default Navbar;
