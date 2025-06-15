"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Title from "../Ui/Title";

const features = [
  {
    title: "Client-Centric Approach",
    description: "We focus on your goals and business growth.",
  },
  {
    title: "Complete Digital Solutions",
    description: "All services under one expert roof.",
  },
  {
    title: "Latest Tools & Technologies",
    description: "For modern, secure, and scalable performance.",
  },
  {
    title: "Professional Delivery & Support",
    description: "Transparent communication, timely execution.",
  },
];

export default function WhyUs() {
  return (
    // <section className="py-16 px-6 bg-gradient-to-br from-white to-gray-50" id="why-us">
    <section className="w-full p-8 sm:px-16">
      <Title title="Why TechDoom" />
      <p className="mt-2 text-lg text-center text-gray-600 max-w-4xl mx-auto">
        Ready to turn your idea into a high-impact digital product? Let’s build
        something powerful, together
      </p>
    <br /><br />
      <div className="my-6 grid md:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-md transition-shadow cursor-pointer"
          >
            <CheckCircle className="text-green-500 mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h4>
              <p className="text-gray-500 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
