"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 0.5, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#E8F6F4] rounded-xl p-8 md:p-12 text-center flex flex-col md:flex-row justify-between 
      items-center shadow-lg"
    >
      <div className="text-left">
        <p className="text-[#6BC4B6] font-medium">Change your life</p>
        <h2 className="text-2xl md:text-4xl font-bold text-[#0A1733]">
          It's Time To Change Your
        </h2>
        <p className="text-gray-600 text-lg md:text-2xl">Life Today</p>
      </div>
      <button
        ref={buttonRef}
        className="mt-6 md:mt-0 bg-[#FFC107] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#E0A800] transition-all"
      >
        Contact Now
      </button>
    </div>
  );
};

export default ContactSection;
