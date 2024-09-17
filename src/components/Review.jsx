import React from "react";
import { FaStar } from "react-icons/fa";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/236x/f2/2c/8c/f22c8c5cf59fe5faf9d466e69cde0ee1.jpg",
    name: "Howard Brown",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quae! Expedita cupiditate quo.",
    date: "26th January, 2024",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/236x/f2/2c/8c/f22c8c5cf59fe5faf9d466e69cde0ee1.jpg",
    name: "Howard Brown",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quae! Expedita cupiditate quo.",
    date: "26th January, 2024",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/236x/f2/2c/8c/f22c8c5cf59fe5faf9d466e69cde0ee1.jpg",
    name: "Howard Brown",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quae! Expedita cupiditate quo.",
    date: "26th January, 2024",
  },
];

const Review = () => {
  return (
    <div className=" bg-gray-50 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      {reviews.map((review) => (
        <div className="bg-violet-400 font-semibold text-white lg:pb-10 pb-2 lg:pt-5 pt-2 lg:px-6 px-3 rounded-tl-3xl rounded-br-3xl shadow-inner" key={review.id}>
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
          <p className=" text-white lg:text-base text-sm">{review.review}</p>
          <p className="text-xs font-normal text-white pt-7">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
