"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function BorderButton({ link = "/" }) {  // Default link to root
  return (
    <div className="flex items-center justify-end mt-5 mr-12">
      <Link href={link}>
        <Button
          className="p-2 text-lg font-bold text-white border rounded-md border-theme-dark-blue dark:border-slate-800"
        >
          More
        </Button>
      </Link>
    </div>
  );
}

export default BorderButton;
