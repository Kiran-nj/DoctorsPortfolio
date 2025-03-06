import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "SABIRA K",
    date: "2023-12-28",
    review:
      "I am Sabira, now I am 30 years old, but when I was 18 years, I had a back pain which was severe...",
  },
  {
    name: "Joe C Saju",
    date: "2023-12-24",
    review:
      "Never came across such a humble and empathetic doctor. Highly recommend Mahesh doctor...",
  },
  {
    name: "jimmy joy",
    date: "2023-09-26",
    review:
      "I had consulted Dr. Mahesh Krishnan for my ACL tear. I have done my post-surgery rehabilitation...",
  },
  {
    name: "Sreyas Vg",
    date: "2023-09-13",
    review:
      "Dr. Mahesh sir is a very good experienced doctor. He is very attentive to his patients and very friendly...",
  },
  {
    name: "Preetha krishna",
    date: "2023-07-29",
    review: "Dr. Mahesh Krishnan is extremely good with his diagnosis. One of the best Orthopedic...",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-20">
      {/* Testimonials Header */}
      <h3 className="text-teal-500 text-lg font-semibold text-center">
        Testimonials
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-2">
        What people say about us
      </h2>

      {/* Testimonials Slider */}
      <div className="mt-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                  <FaGoogle className="text-gray-500 ml-auto" />
                </div>
                <div className="flex gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">{item.review}</p>
                <button className="text-blue-500 mt-2">Read more</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 bg-blue-100 rounded-lg p-10 text-center relative">
        <h4 className="text-teal-500 text-lg font-semibold">
          Change your life
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          It’s Time To Change Your Life Today
        </h2>
        <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition">
          Contact Now
        </button>
      </div>
    </section>
  );
}
