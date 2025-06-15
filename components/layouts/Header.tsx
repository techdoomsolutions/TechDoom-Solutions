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
        className={`fixed top-0 w-full h-20 px-10 flex justify-between items-center transition-all duration-300 z-50 ${
          scrolled
            ? "text-white bg-green-500 drop-shadow-xl"
            : "text-gray-800 bg-transparent"
        }`}
      >
        <div className="w-fit">
          <Link href="/">
            <div className="flex justify-center items-center gap-2">
              <Image
                width={120}
                height={80}
                src="/Images/solution.jpg"
                alt="logo"
              />
              {/* <p
                className={`text-2xl ${
                  scrolled ? "hover:text-gray-800" : "hover:text-green-500"
                }`}
              >
                Attendance
              </p> */}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 text-xl items-center justify-center">
          <Link
            href="/"
            className={`${
              scrolled ? "hover:text-gray-800" : "hover:text-green-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`${
              scrolled ? "hover:text-gray-800" : "hover:text-green-500"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className={`${
              scrolled ? "hover:text-gray-800" : "hover:text-green-500"
            }`}
          >
            Servise
          </Link>

          <Link
            href="/contact"
            className={`${
              scrolled ? "hover:text-gray-800" : "hover:text-green-500"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* <div className="hidden lg:flex w-fit text-xl">
          <Link
            href="/sign-in"
            className={`${
              scrolled ? "hover:text-gray-800" : "hover:text-green-500"
            }`}
          >
            Sign In
          </Link>
        </div> */}

        {/* Mobile Menu Toggle */}
        {!visible ? (
          <Menu
            onClick={toggleMenu}
            className={`mx-4 lg:hidden cursor-pointer w-8 h-8 ${
              scrolled ? "text-white" : "text-gray-800"
            }`}
          />
        ) : (
          <X
            onClick={toggleMenu}
            className={`mx-4 lg:hidden cursor-pointer w-8 h-8 ${
              scrolled ? "text-white" : "text-gray-800"
            }`}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed top-0 pt-20 z-40 w-full h-auto text-gray-800 bg-green-500/75 rounded-b-xl lg:hidden">
          <div className="flex flex-col p-4 pt-8 space-y-4">
            <Link href="/" className="py-2" onClick={() => setVisible(false)}>
              Home
            </Link>
            <Link
              href="/features"
              className="py-2"
              onClick={() => setVisible(false)}
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="py-2"
              onClick={() => setVisible(false)}
            >
              Servise
            </Link>
            <Link
              href="/contact"
              className="py-2"
              onClick={() => setVisible(false)}
            >
              Contact Us
            </Link>
            {/* <Link
              href="/sign-in"
              className="py-2"
              onClick={() => setVisible(false)}
            >
              Sign In
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
}
