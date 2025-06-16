"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Title from "../Ui/Title";
import TitleLine from "../Ui/TitleLine";

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
    <section className="w-full p-8 sm:px-16 space-y-4">
      <Title title="Why TechDoom" />
      <TitleLine titleline="Ready to turn your idea into a high-impact digital product? Let’s build something powerful, together" />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
