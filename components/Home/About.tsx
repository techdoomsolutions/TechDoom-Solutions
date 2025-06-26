"use client";

import Image from "next/image";
import Title from "../Ui/Title";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Server,
  Smartphone,
  Smile,
} from "lucide-react";
import TitleLine from "../Ui/TitleLine";

const specialist = [
  {
    text: "Custom Software Development tailored to your business needs.",
    icon: <Code2 />,
  },
  {
    text: "Web & Mobile App Development with seamless user experiences.",
    icon: <Smartphone />,
  },
  {
    text: "End-to-End IT Infrastructure Solutions for startups and enterprises.",
    icon: <Server />,
  },
  {
    text: "Cloud Migration & DevOps services for scalability and performance.",
    icon: <Cloud />,
  },
  {
    text: "AI, Machine Learning & Data Analytics solutions for business insights.",
    icon: <BrainCircuit />,
  },
];

export default function AboutUs() {
  return (
    <>
      <section id="about" className="w-full p-8 sm:px-16 space-y-4">
        <Title title="About Us" />
        <TitleLine
          titleline="A passionate team of tech experts dedicated to turning bold ideas into
          cutting-edge solutions"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <Image
              width={300}
              height={500}
              src="/Images/about.jpg"
              alt="about"
              // className="cursor-pointer hover:scale-105 duration-1000"
              className="w-full h-full cursor-pointer hover:scale-105 duration-1000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="w-fit mx-auto grid grid-cols-2 gap-8">
              <div className="group p-4 text-center space-y-4 shadow-md rounded-xl cursor-pointer">
                <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-transparent group-hover:bg-green-100 mx-auto">
                  <Smile />
                </div>
                <h3 className="text-2xl text-black font-semibold">Clients</h3>
                <p className="text-md text-gray-500 font-semibold">
                  10+ happy clients
                </p>
              </div>
              <div className="group p-4 text-center space-y-4 shadow-md rounded-xl cursor-pointer ">
                <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-transparent group-hover:bg-green-100 mx-auto">
                  <Code2 />
                </div>
                <h3 className="text-2xl text-black font-semibold">Projects</h3>
                <p className="text-md text-gray-500 font-semibold">
                  10+ Completed
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-center sm:text-left text-2xl font-bold text-gray-700">
                Innovative Digital Solutions That Drive Real Growth
              </h3>
              <p className="text-justify text-md text-gray-500">
                {`At TechDoom, we blend creativity, technology, and strategy to
                build digital solutions that perform, scale, and impress.
                Whether you're a startup, entrepreneur, or an evolving brand,
                our goal is to fuel your success with custom-built web and
                marketing experiences that deliver measurable impact. We don’t
                just build websites - we build lasting digital partnerships
                rooted in quality, performance, and trust.`}
              </p>

              <h3 className="text-center sm:text-left text-2xl font-bold text-gray-700">
                What We Specialize In
              </h3>

              {specialist.map((item, index) => (
                <div
                  key={index}
                  className="p-2 rounded-xl shadow-md flex justify-center gap-2 mb-2"
                >
                  <div className="mt-0.5 bg-green-500/25 h-fit rounded-full p-2">
                    {item.icon}
                  </div>
                  <p className="text-md text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
