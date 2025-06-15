"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen px-8 sm:px-16 flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="w-full sm:w-1/2 h-1/2 text-center space-y-4">
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
        <div className="w-fit mx-auto flex gap-4 pt-4">
          <Link href="#" className="">
            <button className="bg-green-500 hover:bg-white  text-white hover:text-green-500 hover:border hover:border-green-500 rounded-lg py-2 px-6 cursor-pointer">
              {` Let's Talk`}
            </button>
          </Link>
          <Link href="#" className="">
            <button className="bg-green-500 hover:bg-white  text-white hover:text-green-500 hover:border hover:border-green-500 rounded-lg py-2 px-6 cursor-pointer">
              {`Explore`}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
