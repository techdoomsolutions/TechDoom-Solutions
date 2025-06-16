"use client";

import Image from "next/image";
import Title from "../Ui/Title";
import { motion } from "framer-motion";
import Form from "./Form";
export default function Contact() {
  return (
    <>
      <section id="contact" className="w-full p-8 sm:px-16 space-y-4">
        <Title title="Contact Us" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <Form />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <Image
              width={300}
              height={300}
              src="/Images/contact2.png"
              alt="about"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
