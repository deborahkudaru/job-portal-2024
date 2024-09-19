import React, { useEffect, useState } from "react";
import person2 from "../images/prince-akachi-i2hoD-C2RUA-unsplash.jpg";
import person3 from "../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const talents = [
  {
    imageUrl: person2,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "25 Years Old",
  },
  {
    imageUrl: person2,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "23 Years Old",
  },
  {
    imageUrl: person3,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "26 Years Old",
  },
];

const FindTalent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "Users")
        );
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 lg:px-32 pt-10">
      <h2 className="text-4xl font-bold mt-28 text-center pb-10">
        Find Talent
      </h2>
      <div className=" grid grid-cols-3  gap-3">
        {data.map((item) => (
          <Link>
            <div className="px-5 pt-5 border-2 border-slate-100 bg-white">
              <img src={item.imageUrl} alt="" className="w-64 pb-4" />
              {/* <p className="text-xs font-bold text-slate-600 bg-white relative left-52 w-7 px-5 rounded">
                <FaStar className="relative right-4 top-3 text-yellow-400" />{" "}
                {.rating}
              </p> */}
              <p className="text-sm text-slate-500 font-semibold">
                {item.job}
              </p>
              <p className="text-xl font-bold">{item.firstName} {item.lastName}</p>
              {/* <p className="text-sm text-slate-500 font-semibold relative left-44 bottom-10">
                {item.age}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindTalent;
