import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Servise from "@/components/Home/Servise";
import AboutUs from "@/components/Home/About";
import WhyUs from "@/components/Home/WhyUs";
import Footer from "@/components/Home/Footer";
import Contact from "@/components/Home/contact";
import { ToastContainer } from "react-toastify";
import ProjectShowcase from "@/components/Home/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servise />
      <AboutUs />
      <WhyUs />
      <Contact />
      <ProjectShowcase />
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}
