"use client";

import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const metadata: Metadata = {
  title: "My first NextJS",
  description: "Testing App 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathName = usePathname();
  return (
    <html lang="en">
      <body className="h-screen grid grid-cols-4">
        <div className="grid h-40">
          <Link
            href="/"
            className="mx-auto w-20 h-8 text-center focus:bg-red-300"
          >
            /
          </Link>
          <Link
            href="/table"
            className="mx-auto w-20 h-8 text-center focus:bg-red-300"
          >
            /table
          </Link>
          <Link
            href="/keyword"
            className="mx-auto w-20 h-8 text-center focus:bg-red-300"
          >
            /keyword
          </Link>
        </div>
        <main className="col-span-3">{children}</main>
        {/* <div className="col-span-3">
          {pathName === "/" ? null : (
            <h1 className="h-40 text-center content-center">Sub app</h1>
          )}
          <main className="col-span-3">{children}</main>
        </div> */}
      </body>
    </html>
  );
}
