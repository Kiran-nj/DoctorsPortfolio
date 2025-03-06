import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import MeetDoctor from "@/src/components/MeetDoctor";
import Speciality from "@/src/components/Speciality";
/* import TestimonialsSection from "@/src/components/TestimonialsSection"; */
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main >
       <Hero />

       <Speciality />

       <MeetDoctor />
      {/*  <TestimonialsSection /> */}
      </main>
      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}
