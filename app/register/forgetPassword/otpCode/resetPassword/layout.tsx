import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password",
  description: "Please enter your new password",
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