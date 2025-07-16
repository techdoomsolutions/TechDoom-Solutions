import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/About";
import Servise from "@/components/Home/Servise";
import WhyUs from "@/components/Home/WhyUs";
import ProjectShowcase from "@/components/Home/ProjectShowcase";
import Contact from "@/components/Home/contact";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Servise />
      <WhyUs />
      <ProjectShowcase />
      <Contact />
      <ToastContainer position="top-center" />
    </>
  );
}
