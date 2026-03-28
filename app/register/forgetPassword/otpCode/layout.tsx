import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter OTP",
  description: "Please enter the OTP sent to your email",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <>
        {children}
      </>

  );
}