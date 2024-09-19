import React from "react";
import { FaStar } from "react-icons/fa";
import reviews from "../constants/reviews";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className=" bg-gray-50 flex">
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=""
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-violet-400 font-semibold text-white lg:pb-10 pb-2 lg:pt-5 pt-2 lg:px-6 px-3 rounded-tl-3xl rounded-br-3xl shadow-inner mb-10">
              <div className="pb-2">
                <img
                  src={review.imageUrl}
                  alt=""
                  className="float-left w-12 mr-3 rounded-full"
                />
                <p className="text-xl">{review.name}</p>
                <p className="flex gap-1 lg:pb-3 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
              <p className=" text-white lg:text-base text-sm">
                {review.review}
              </p>
              <p className="text-xs font-normal text-white pt-7">
                {review.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
