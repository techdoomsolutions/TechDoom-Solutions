import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-green-500 text-gray-500 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-white font-semibold">
            <Link href="#">
              <Image
                width={200}
                height={100}
                className="mb-2"
                src="/Images/solution.jpg"
                alt="logo"
              />
            </Link>
            <div>
              <Link href="#" className="">
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
          <div className="text-white font-semibold">
            <h3 className="text-xl text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:ml-4">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:ml-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#servise" className="hover:ml-4">
                  Servise
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:ml-4">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="text-white font-semibold">
            <h3 className="text-xl text-white mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:ml-4">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:ml-4">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:ml-4">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:ml-4">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:ml-4">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="text-white font-semibold">
            <h3 className="text-xl text-white mb-4">Other Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="hover:ml-4">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="hover:ml-4">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-md font-semibold text-white p-4 bg-black">
        <span className="text-white">© </span>
        {new Date().getFullYear()} TechDoom Solutions.
        <span className="text-green-500"> All rights reserved.</span>
      </div>
    </footer>
  );
}
