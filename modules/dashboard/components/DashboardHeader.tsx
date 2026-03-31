"use client";

import Image from 'next/image';
import LogoutBtn from './LogoutBtn';
import logo from "@/public/logo.svg";



function DashboardHeader() {
  return (
    <header>
        <div className="flex items-center justify-between py-4 px-5 bg-gray-800 ">
            <div className='flex items-center gap-3'>
                <Image src={logo} alt="Logo" className="h-8 w-auto" />
                <h2 className="ml-2 text-lg font-bold text-white">Zhangliang Mala Shop</h2>
            </div>
            <div className=" flex items-center gap-1">
          <Image
            className=" size-8 rounded-full border-2 border-muted"
            src={logo}
            alt="Profile Picture"
          />
          <div className='flex flex-row items-center gap-10'>
            <div className="flex gap-1 items-center flex-col">
            <h5 className=" font-semibold text-white">name</h5>
            <p className=" text-sm text-muted-foreground">email</p>
          </div>
          <div>
             <LogoutBtn />
          </div>
          </div>
          
         
        </div>
        </div>
    </header>
  )
}

export default DashboardHeader
