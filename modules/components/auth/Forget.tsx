import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";


export default function ForgetPassword() {
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
              >Forget Password!</CardTitle>
            <CardDescription 
              className="text-xl">
              Please fill your email below and we will send you an OTP to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full mt-5">
            <form className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-3">
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

              <Link href="/register/forgetPassword/otpCode"
                type="submit"
                className="w-full flex justify-center font-bold bg-[#EC6C00] px-3 py-5 mt-5 text-black text-2xl hover:bg-[#D45A00] focus:outline-none focus:ring-2 focus:ring-[#EC6C00] focus:ring-offset-2">
                Next
              </Link>
            </form>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
