import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
];

export default function ReviewPart() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <p className="text-gray-600 italic mb-6">“{item.text}”</p>
              <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-teal-700">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
