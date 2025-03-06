import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20 bg-[#ecfdf5]">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
          Dr. Mahesh Krishnan
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mt-2">
          Consultant Sports Surgeon, <br /> Arthroscopist, Shoulder Specialist.
        </h2>
        <p className="text-gray-700 mt-4">
          Dr. Mahesh Krishnan is a highly skilled and dedicated Consultant
          Arthroscopist, Shoulder, and Sports Surgeon with a stellar reputation
          in the medical community.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-all">
          Contact Us
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
          alt="Dr. Mahesh Krishnan"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
