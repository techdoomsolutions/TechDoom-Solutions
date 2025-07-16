"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { name: "Home", id: "#" },
  { name: "Career", id: "/career" },
  { name: "About Us", id: "#about" },
  { name: "Services", id: "#servise" },
  { name: "Projects", id: "#project" },
  { name: "Contact Us", id: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    // Only scroll if it's a hash (starts with "#")
    if (id.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setMenuOpen(false), 200);
      }
    } else {
      // For full page navigation like /career, just close menu with delay
      setTimeout(() => setMenuOpen(false), 200);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-20 px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-green-600 shadow-md" : "bg-green-500"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            width={140}
            height={80}
            src="/Images/solution.jpg"
            alt="TechDoom Solutions Logo"
            className="rounded bg-black p-2"
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 text-white text-sm font-medium tracking-wide uppercase">
        {sections.map(({ name, id }) => (
          <Link
            key={id}
            href={id}
            onClick={(e) => handleSmoothScroll(e, id)}
            className="transition hover:text-black"
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-white">
        {menuOpen ? (
          <X
            onClick={toggleMenu}
            className="w-8 h-8 cursor-pointer transition"
            aria-label="Close mobile menu"
          />
        ) : (
          <Menu
            onClick={toggleMenu}
            className="w-8 h-8 cursor-pointer transition"
            aria-label="Open mobile menu"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-green-500/95 text-white py-6 lg:hidden rounded-b-xl z-40"
          >
            <div className="flex flex-col items-center space-y-4 text-lg font-medium">
              {sections.map(({ name, id }) => (
                <Link
                  key={id}
                  href={id}
                  onClick={(e) => handleSmoothScroll(e, id)}
                  className="hover:text-black transition"
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
