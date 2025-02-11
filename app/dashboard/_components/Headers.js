
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const Headers = () => {
  const path=usePathname();
  useEffect( ()=>{
    console.log(path);

  },[])

  
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo"></Image>
      <ul className=" hidden md:flex gap-8">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "dashboard" && "text-primary font-bold"
          }`}
        >
          home
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "dashboard" && "text-primary font-bold"
          }`}
        >
          upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "dashboard" && "text-primary font-bold"
          }`}
        >
          question
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "dashboard" && "text-primary font-bold"
          }`}
        >
          how to work
        </li>
      </ul>
      <UserButton></UserButton>
    </div>
  );
}

export default Headers
