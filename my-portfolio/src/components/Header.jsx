"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Speciality", href: "/speciality" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#e7f5f2] shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <div className="text-lg font-semibold">
          <p>Dr. Mahesh Krishnan</p>
          <p className="text-sm text-gray-600">D.Ortho, DNB.Ortho</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setNavOpen(!navOpen)} 
        className="lg:hidden text-gray-900 text-2xl"
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <nav
        className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#e7f5f2] lg:bg-transparent 
        flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-6 lg:p-0 shadow-lg lg:shadow-none
        ${navOpen ? "block" : "hidden lg:flex"}`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-lg font-medium text-gray-900 hover:text-blue-600"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Contact Info */}
      <div className="hidden lg:flex items-center space-x-2">
        <div className="p-3 bg-white rounded-xl shadow-md">
          <FaPhoneAlt className="text-blue-600" />
        </div>
        <div>
          <p className="text-lg font-medium text-gray-900">(+91) 8129475163</p>
          <p className="text-sm text-gray-600">Booking Time: 9am - 5pm</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
