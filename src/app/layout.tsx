"use client";

import CursorShape from "@/components/CursorShape/CursorShape";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      /> */}
      <title>This is Nothing</title>
      <body className={` `}>
        {children}
        {/* <CustomCursor /> */}
        {/* <CursorShape /> */}
      </body>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        async
      ></script> */}
    </html>
  );
}
