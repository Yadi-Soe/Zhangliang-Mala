"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg"; 


export default function OtpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-600 font-sans dark:bg-black py-20">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center px-16 bg-gray-600 dark:bg-black">
        <Image
          className="dark:invert"
          src={logo}
          alt="Mala Shop logo"
          width={50}
          height={10}
          priority
        />
        <Card className="w-full bg-black border-0 rounded-none mt-20 py-20 px-10">
          <CardHeader>
            <CardTitle
              className="text-4xl text-white"
              >Verification</CardTitle>
            <CardDescription 
              className="text-xl">
              Enter the OTP code from your email we just sent you 
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full mt-5">
            <form className="w-full flex flex-col gap-5">
             
              <div className="flex gap-10 justify-center">
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" maxLength={1} className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
              </div>

              <div className="flex items-center justify-between gap-2 py-5">
                <div className="flex items-center gap-3">
                  <p className="text-xl text-gray-400">
                    Didn&apos;t receive the code?
                  </p>
                </div>
                <div className="">
                  <button  className="text-xl underline text-gray-400">
                    Resent
                  </button>
                </div>
              </div>
              <Link  href="/register/forgetPassword/otpCode/resetPassword">
                <button type="submit" className="w-full flex justify-center font-bold bg-[#EC6C00] px-3 py-5 mt-5 text-black text-2xl hover:bg-[#D45A00] focus:outline-none focus:ring-2 focus:ring-[#EC6C00] focus:ring-offset-2">
                  Submit
                </button>
              </Link>
            </form>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}

