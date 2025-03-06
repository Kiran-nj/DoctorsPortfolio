"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaHome } from "react-icons/fa";

const specialities = [
  {
    title: "Sports Injury",
    description:
      "Sports injuries can affect various parts of the body, including muscles, bones, tendons, ligaments, and joints.",
  },
  {
    title: "Arthroscopy",
    description:
      "Arthroscopy is a minimally invasive surgical procedure used to diagnose and treat a variety of joint-related issues.",
  },
  {
    title: "ACL Treatment",
    description:
      "ACL injuries are common, especially among athletes who engage in sports with quick changes in direction.",
  },
  {
    title: "Rotator Cuff",
    description:
      "The treatment for a rotator cuff injury depends on the severity of the injury and the patient's overall health and activity level.",
  },
];

export default function Speciality() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="py-12 px-6 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-8">
        Our Speciality
      </h2>

      {/* Grid Container */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {specialities.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
          >
            <div className="p-4 bg-blue-50 rounded-lg mb-4">
              <FaHome className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
