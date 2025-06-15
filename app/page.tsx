import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Servise from "@/components/Home/Servise";
import AboutUs from "@/components/Home/About";
import WhyUs from "@/components/Home/WhyUs";
import Footer from "@/components/Home/Footer";
import Contact from "@/components/contact/contact"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servise />
      <AboutUs />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
