import Cross from "@/constants/Svgs/Cross.svg";
import Facebook from "@/constants/Svgs/Facebook.svg";
import { Hamburger } from "@/constants/Svgs/Hamburger.svg";
import Insta from "@/constants/Svgs/Insta.svg";
import Twitter from "@/constants/Svgs/Twitter.svg";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = React.useState(false);

  return (
    <div className="fixed bg-opacity-60 bg-black w-full z-40">
      <div className="relative flex flex-row items-center justify-between   px-4 py-4">
        <img src="/assets/logo.png" alt="logo" className="h-12 lg:h-8 w-auto" />
        {!menuClicked && (
          <button
            onClick={() => {
              setMenuClicked(true);
            }}
            className="flex flex-row items-center justify-end text-white"
          >
            Menu
            <Hamburger className="w-16 lg:w-8 h-auto ml-2 " />
          </button>
        )}
        {menuClicked && (
          <div className="fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-95 z-50 flex flex-col items-center">
            <div className="flex flex-row items-center justify-end w-full p-4">
              <button
                onClick={() => {
                  setMenuClicked(false);
                }}
                className="flex flex-col items-center"
              >
                <Cross className="w-8 h-auto" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-8 pt-24 text-center">
              {["Home", "About", "Films", "Contact Us"].map((link, index) => (
                <Link
                  key={index}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMenuClicked(false)}
                  className="text-white text-xl font-bold tracking-wide transform opacity-0 transition-all duration-500 ease-in-out delay-200 hover:text-[#ffb41c]"
                  style={{
                    transform: menuClicked
                      ? "translateX(0)"
                      : "translateX(-100px)", // Moves links from left to right
                    opacity: menuClicked ? 1 : 0, // Fade-in effect
                    transitionDelay: `${index * 100}ms`, // Delay for each item
                  }}
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center mt-4 lg:mt-8">
              <Facebook className="w-8 h-auto text-white mr-4" />
              <Insta className="w-8 h-auto text-white mr-4" />
              <Twitter className="w-8 h-auto text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
