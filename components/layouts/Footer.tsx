import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-gray-500 text-gray-400 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-gray-300 font-semibold">
            <Link href="#">
              <Image
                width={200}
                height={100}
                className="mb-2"
                src="/Images/solution.jpg"
                alt="logo"
              />
            </Link>
            {/* <Link href="#" className="hover:text-white">
              Office No.311, Sai trade Center, Railway station road, Aurangabad,
              Maharashtra 431001
            </Link> */}
            {/* <div>
              <Link href="#" className="hover:text-white">
                Phone: +91-9422-351656
              </Link>
            </div> */}
            <div>
              <Link href="#" className="hover:text-white">
                Email: techdoomsolutions@gmail.com
              </Link>
            </div>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="text-xl hover:text-blue-500" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
                <Linkedin className="text-xl hover:text-blue-400" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="text-xl hover:text-pink-500" />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <Youtube className="text-xl hover:text-red-500" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-gray-300 font-semibold">
            <h3 className="text-xl text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white hover:ml-4">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white hover:ml-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white hover:ml-4">
                  Servise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:ml-4">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="text-gray-300 font-semibold">
            <h3 className="text-xl text-white mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white hover:ml-4">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:ml-4">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:ml-4">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:ml-4">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:ml-4">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="text-gray-300 font-semibold">
            <h3 className="text-xl text-white mb-4">Other Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="hover:text-white hover:ml-4">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacypolicy"
                  className="hover:text-white hover:ml-4"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-md font-semibold text-white p-4 bg-green-700">
        <span className="text-black">© </span>
        {new Date().getFullYear()} TechDoom Solutions.
        <span className="text-black"> All rights reserved.</span>
      </div>
      {/* <div className="text-center text-md font-semibold text-white pb-4 bg-[#706f7a]">
        Developed by -{" "}
        <span className="text-[#5227A3]">
          <Link href="https://mokshasolutions.com/" target="_blank">
            Moksha Solutions
          </Link>
        </span>
      </div> */}
    </footer>
  );
}
