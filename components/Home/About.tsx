"use client";

import Image from "next/image";
import Title from "../Ui/Title";
import { motion } from "framer-motion";
import { Code2, Smile } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <section id="about" className="w-full p-8 sm:px-16">
        <Title title="About Us" />
        <p className="mt-2 text-lg text-center text-gray-600 max-w-4xl mx-auto">
          A passionate team of tech experts dedicated to turning bold ideas into
          cutting-edge solutions
        </p>
        <br />
        <br />

        {/* <div className="flex flex-col md:flex-row justify-between items-stretch p-6 gap-8"> */}
        <div className="flex w-full p-6 gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              width={400}
              height={600}
              src="/Images/servise.jpg"
              alt=""
              className="mx-auto cursor-pointer hover:scale-105 duration-1000 w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="w-full  space-y-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="grid  sm:grid-cols-2 gap-4"></div> */}
            <div>
              <div className="flex border-2 border-solid-black justify-around">
                <div className="group p-4 text-center space-y-4 shadow-md rounded-xl cursor-pointer ">
                  <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-transparent group-hover:bg-green-100 mx-auto">
                    <Code2 />
                  </div>
                  <h3 className="text-2xl text-black font-semibold">
                    Projects
                  </h3>
                  <p className="text-md text-gray-500 font-semibold">
                    10+ Completed
                  </p>
                </div>
                <div className="group p-4 text-center space-y-4 shadow-md rounded-xl cursor-pointer">
                  <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-transparent group-hover:bg-green-100 mx-auto">
                    <Smile />
                  </div>
                  <h3 className="text-2xl text-black font-semibold">Clients</h3>
                  <p className="text-md text-gray-500 font-semibold">
                    10+ happy clients
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-center sm:text-left text-2xl font-bold text-gray-700">
                  Innovative Digital Solutions That Drive Real Growth
                </h3>
                <p className="text-justify sm:text-left text-md text-gray-500">
                  {`At TechDhoom, we blend creativity, technology, and strategy to
                build digital solutions that perform, scale, and impress.
                Whether you're a startup, entrepreneur, or an evolving brand,
                our goal is to fuel your success with custom-built web and
                marketing experiences that deliver measurable impact. We don’t
                just build websites — we build lasting digital partnerships
                rooted in quality, performance, and trust.`}
                </p>
              </div>
              <div>
                <h3 className="text-center sm:text-left text-2xl font-bold text-gray-700">
                  What We Specialize In
                </h3>
                <ul className="list-disc ml-5">
                  <li className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, recusandae.
                  </li>
                  <li className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, recusandae.
                  </li>
                  <li className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, recusandae.
                  </li>
                  <li className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, recusandae.
                  </li>
                  <li className="text-md text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, recusandae.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
