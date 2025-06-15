"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`w-full h-20 px-10 flex justify-between items-center transition-all duration-300 z-50 text-white bg-green-500 drop-shadow-xl ${
          scrolled ? "text-white" : "text-white"
        }`}
      >
        <div className="w-fit">
          <Link href="/">
            <div className="flex justify-center items-center gap-2">
              <Image
                width={140}
                height={80}
                src="/Images/solution.jpg"
                alt="logo"
                className="rounded bg-black p-2"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 text-lg  items-center justify-center uppercase font-bold">
          <Link
            href="/#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="hover:text-black tracking-widest"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="hover:text-black tracking-widest"
          >
            About Us
          </Link>
          <Link
            href="/#servise"
            onClick={(e) => handleSmoothScroll(e, "#servise")}
            className="hover:text-black tracking-widest"
          >
            Servise
          </Link>

          <Link
            href="/#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hover:text-black tracking-widest"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        {!visible ? (
          <Menu
            onClick={() => {
              toggleMenu();
              console.log("asd");
            }}
            className="mx-4 lg:hidden cursor-pointer w-8 h-8 text-white"
          />
        ) : (
          <X
            onClick={() => {
              toggleMenu();
              console.log("asd");
            }}
            className="mx-4 lg:hidden cursor-pointer w-8 h-8 text-white"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed top-0 pt-20 w-full h-auto text-gray-800 bg-green-500/75 rounded-b-xl lg:hidden">
          <div className="flex flex-col p-4 pt-8 space-y-4">
            <Link
              href="/#"
              className="py-2"
              onClick={(e) => {
                handleSmoothScroll(e, "#");
                toggleMenu();
              }}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="py-2"
              onClick={(e) => {
                handleSmoothScroll(e, "#about");
                toggleMenu();
              }}
            >
              About Us
            </Link>
            <Link
              href="/#servise"
              className="py-2"
              onClick={(e) => {
                handleSmoothScroll(e, "#servise");
                toggleMenu();
              }}
            >
              Servise
            </Link>
            <Link
              href="/#contact"
              className="py-2"
              onClick={(e) => {
                handleSmoothScroll(e, "#contact");
                toggleMenu();
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
