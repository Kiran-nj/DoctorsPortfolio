import ContactSection from "@/src/components/Contact";
import Header from "@/src/components/Header";
import HeaderFooter from "@/src/components/HeaderFooter";
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

      <div className="flex flex-col items-center justify-center min-h- p-8">
      <ContactSection />
    </div>

    <HeaderFooter />
      </main>

    </div>
  );
}
