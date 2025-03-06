import Image from "next/image";

export default function MeetDoctor() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20 bg-white">
      {/* Left - Doctor Image */}
      <div className="relative w-full md:w-1/3">
        <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-200 rounded-lg shadow-lg"></div>
        <Image
          src="/doctor-image.jpg"
          alt="Dr. Mahesh Krishnan"
          width={400}
          height={400}
          className="relative rounded-lg shadow-lg"
        />
      </div>

      {/* Right - Doctor Info */}
      <div className="w-full md:w-2/3 md:pl-10">
        <h3 className="text-lg text-teal-500 font-semibold">Meet Doctor</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Mahesh Krishnan
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Dr. Mahesh Krishnan, a skilled Consultant Arthroscopist and Shoulder
          Surgeon, is respected for his exceptional surgical skills and deep
          knowledge of shoulder pathologies. With over 2000 successful
          surgeries, he is a leading arthroscopist. His pioneering Shoulder
          Complex Rehabilitation Program has transformed shoulder treatment.
          Dr. Mahesh Krishnan's unwavering commitment to learning and patient
          care defines him as an exemplary healthcare professional, shaping the
          field of orthopedic surgery.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { number: "5,000+", text: "Satisfied Patients" },
            { number: "15+", text: "Clinic of Beds" },
            { number: "2,500+", text: "Procedures" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-3xl font-bold text-blue-700">{item.number}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
