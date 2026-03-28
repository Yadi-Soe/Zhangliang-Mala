import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter your email",
  description: "Please enter your email to reset your password",
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