"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { defaultLoginRoutePath } from "@/lib/constants";
import logo from "@/public/logo.svg";


export default function RegisterPage() {
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
              >Register Now!</CardTitle>
            <CardDescription 
              className="text-xl">
              Enter your details below to Sign Up
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full mt-5">
            <form className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="userName" className="text-xl text-white font-medium">
                  User Name
                </label>
                <input
                  type="userName"
                  id="userName"
                  placeholder="Enter your username"
                  className="w-full border bg-zinc-800 border-none text-gray-400 px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

               <div className="flex flex-col gap-3 mt-5">
                <label htmlFor="email" className="text-xl text-white font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border bg-zinc-800 border-none text-gray-400 px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <label htmlFor="password" className="text-xl text-white font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border bg-zinc-800 border-none text-gray-400 px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

               <div className="flex flex-col gap-3 mt-5">
                <label htmlFor="confirmPassword" className="text-xl text-white font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full border bg-zinc-800 border-none text-gray-400 px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-between gap-2 py-5">
                <div className="flex items-center gap-3">
                  <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-2 focus:outline-none"
                    />
                  <Label htmlFor="remember" className="text-xl text-gray-400">
                    I have read and agree to the Terms and Conditions
                  </Label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full font-bold bg-[#EC6C00] px-3 py-5 text-black text-2xl hover:bg-[#D45A00] focus:outline-none focus:ring-2 focus:ring-[#EC6C00] focus:ring-offset-2">
                Sign Up
              </button>

              <div className="flex items-center justify-center mt-5">
                <p className="text-xl text-white">Already have an account?</p>
                <Link href={defaultLoginRoutePath} className="ml-5 text-xl underline text-white">
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}