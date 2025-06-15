"use client";
import Title from "../Ui/Title";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  ChartLine,
  Code,
  Globe2,
  LayoutDashboard,
  SearchCheckIcon,
} from "lucide-react";

export default function Servise() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640; // sm breakpoint

  return (
    <section id="servise" className="w-full p-8 sm:px-16">
      <Title title="What We Do" />
      <p className="mt-2 text-lg text-center text-gray-600 max-w-4xl mx-auto">
        From web development to cloud solutions, we offer end-to-end IT services
        tailored to your needs
      </p>
      <br />
      
      <div className="my-4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
        {/* First Features Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
          className="order-2 sm:order-1 space-y-6 my-auto"
        >
          <div className="text-center sm:text-right">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:ml-auto sm:mr-0">
              <Bot />
            </div>
            <h3 className="mb-2 text-xl font-bold">Generative AI</h3>
            <p className="text-md">
              Unleash the power of AI to create intelligent, automated solutions
              that elevate your content, workflows, and innovation{" "}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:ml-auto sm:mr-0">
              <LayoutDashboard />
            </div>
            <h3 className="mb-2 text-xl font-bold">UI/UX Design</h3>
            <p className="text-md">
              We craft intuitive and engaging user experiences with sleek
              interfaces that captivate and convert{" "}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:ml-auto sm:mr-0">
              <Code />
            </div>
            <h3 className="mb-2 text-xl font-bold">Development</h3>
            <p className="text-md">
              From robust websites to scalable web apps, we build fast, secure,
              and future-ready digital solutions{" "}
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: isMobile ? 0 : 1.0,
            ease: "easeInOut",
          }} // Smooth transition
          className="order-1 sm:order-2"
        >
          <Image
            width={200}
            height={600}
            src="/Images/servise.jpg"
            alt="phone-features"
            className="mx-auto h-full w-full rounded-2xl  border-1 border-green-500"
          />
        </motion.div>
        {/* Second Features Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
          className="order-3 sm:order-3 space-y-6 my-auto"
        >
          <div className="text-center sm:text-left">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:mr-auto sm:ml-0">
              <ChartLine />
            </div>
            <h3 className="mb-2 text-xl font-bold">Digital Marketing</h3>
            <p className="text-md">
              Grow your brand online with data-driven marketing strategies that
              boost reach, engagement, and ROI{" "}
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:mr-auto sm:ml-0">
              <SearchCheckIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold">SEO</h3>
            <p className="text-md">
              Improve your search visibility and rank higher on Google with our
              proven, white-hat SEO techniques{" "}
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="mb-2 w-12 h-12 flex justify-center items-center rounded-full bg-green-100 mx-auto sm:mr-auto sm:ml-0">  
              <Globe2 />
            </div>
            <h3 className="mb-2 text-xl font-bold">Domain & Web Hosting</h3>
            <p className="text-md">
              We offer reliable domain registration and secure hosting solutions
              to keep your business online 24/7{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
