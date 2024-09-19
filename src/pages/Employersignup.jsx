import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";

const Employersignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Employers", user.uid), {
          email: user.email,
          firstName: Fname,
          lastName: Lname,
          phoneNumber: phoneNumber,
        });
      }
      console.log("user registered successfully");
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="lg:px-48 md:px-32 px-10 pt-10 bg-gray-50 ">
      <Logo />
      <div className="flex flex-row gap-5 justify-end lg:text-base text-sm relative lg:bottom-0 bottom-6">
        <p className=" lg:flex hidden">Looking for work?</p>
        <Link
          to="/worker-signup"
          className="text-violet-400 hover:text-violet-300"
        >
          Apply as a worker
        </Link>
      </div>
      <div className=" mt-5 lg:w-1/2 w-full m-auto">
        <h2 className="lg:text-4xl text-2xl font-semibold mb-10  text-center">
          Sign up to hire
        </h2>

        <form action="" onSubmit={handleRegister}>
          <div className="flex gap-3 lg:text-base text-xs">
            <button className="border border-slate-500 font-semibold lg:w-2/3 w-full m-auto rounded-lg flex lg:gap-2 gap-x-0.5 py-3 pl-3">
              <img src={google} alt="google-logo" className="w-4" />
              Continue with Google
            </button>
            <button className="border border-slate-500 lg:w-2/3 w-full m-auto font-semibold rounded-lg flex lg:gap-2 gap-x-0.5 py-3 pl-3">
              <FaApple className="" />
              Continue with Apple
            </button>
          </div>
          <p className="py-6 text-center">or</p>
          <div className="flex gap-4 pb-6 lg:flex-row flex-col">
            <div className="flex flex-col">
              <label className="lg:text-base text-sm" htmlFor="">
                First Name
              </label>
              <input
                type="name"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                required
                className="border border-slate-400 rounded-xl px-6 py-2 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="lg:text-base text-sm" htmlFor="">
                Last Name
              </label>
              <input
                type="name"
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
                required
                className="border border-slate-400 rounded-xl px-6 py-2 outline-0 bg-gray-50"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col pb-6">
              <label className="lg:text-base text-sm" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 outline-0 px-6 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label className="lg:text-base text-sm" htmlFor="email">
                Work Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 outline-0 px-6 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label className="lg:text-base text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 outline-0 px-6 bg-gray-50"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-1/2 m-auto">
            <button
              className="text-center bg-violet-400 text-gray-50 px-4 py-2 rounded-xl font-semibold mb-10 lg:text-base text-sm"
              type="submit"
            >
              Create my account
            </button>
          </div>

          <p className="text-center mb-6 lg:text-base text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-600 underline underline-offset-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Employersignup;
