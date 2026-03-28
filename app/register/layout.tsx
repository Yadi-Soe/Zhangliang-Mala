import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Please register to your create account",
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