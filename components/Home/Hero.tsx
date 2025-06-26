"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen px-8 sm:px-16 flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="max-w-7xl h-1/2 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        >
          <Image
            width={240}
            height={240}
            src="/Images/techdoom.png"
            alt=""
            className="mx-auto bg-black rounded-xl"
          />
        </motion.div>
        <h1 className="text-3xl md:text-5xl font-bold  text-green-500">
          TechDoom Solutions
        </h1>
        <p className="text-md md:text-xl text-gray-800">
          <em>Your Digital Growth Partner</em>
        </p>
        <p className="text-md text-gray-800">
          Not just another tech company we are your full-stack digital solution.
          You are just one click away from bringing your vision to life. Whether
          it is a sleek website, a custom web application, or a powerful
          marketing campaign - TechDoom delivers scalable, modern, and
          result-driven solutions tailored to your business goals
        </p>
        <div className="w-full mx-auto flex justify-center gap-6">
          <Link
            href="https://www.instagram.com/techdoomsolutions?igsh=eDNkcGM4Yndpamtp"
            className=""
          >
            <div className="bg-green-500/25 hover:bg-green-500/50 rounded-lg p-2 transition-colors ease-in-out cursor-pointer">
              <Instagram />
            </div>
          </Link>
          <Link href="https://www.linkedin.com" className="">
            <div className="bg-green-500/25 hover:bg-green-500/50 rounded-lg p-2 transition-colors ease-in-out cursor-pointer">
              <Linkedin />
            </div>
          </Link>
          <Link href="https://x.com" className="">
            <div className="bg-green-500/25 hover:bg-green-500/50 rounded-lg p-2 transition-colors ease-in-out cursor-pointer">
              <Twitter />
            </div>
          </Link>
          <Link href="https://github.com/" className="">
            <div className="bg-green-500/25 hover:bg-green-500/50 rounded-lg p-2 transition-colors ease-in-out cursor-pointer">
              <Github />
            </div>
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <div className="bg-green-500 hover:bg-green-500/50 font-medium rounded-lg p-2 transition-colors ease-in-out cursor-pointer">
              {` Let's Talk`}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
