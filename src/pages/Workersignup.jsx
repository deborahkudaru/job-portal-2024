import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";

const Workersignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: Fname,
          lastName: Lname,
          phoneNumber: phoneNumber,
          gender: gender,
          job: job,
          description: description,
        });
      }
      console.log("user registered successfully");
      window.location.href = "/worker-profile";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="lg:px-48 px-10 pt-10 bg-gray-50">
      <Logo />
      <div className="flex flex-row gap-2 justify-end relative lg:bottom-0 bottom-6 lg:text-base text-sm">
        <p className=" lg:flex hidden">Looking to hire?</p>
        <Link
          to="/employer-signup"
          className="text-violet-400 hover:text-violet-300"
        >
          Apply as an employer
        </Link>
      </div>
      <div className=" mt-5 lg:w-1/2 m-auto">
        <h2 className="lg:text-4xl text-2xl font-semibold mb-10 text-center">
          Sign up for Work
        </h2>
        <form
          action=""
          onSubmit={handleRegister}
          className="lg:text-base text-sm"
        >
          <div className="flex gap-3 lg:text-base text-xs">
            <button className="border border-slate-500 font-semibold lg:w-2/3 w-full m-auto py-3 rounded-lg flex lg:gap-2 gap-x-0.5 pl-3">
              <img src={google} alt="google-logo" className="w-4" />
              Continue with Google
            </button>
            <button className="border border-slate-500 lg:w-2/3 w-full m-auto font-semibold py-3 rounded-lg flex lg:gap-2 gap-x-0.5 pl-3">
              <FaApple className="" />
              Continue with Apple
            </button>
          </div>
          <p className="py-6 text-center">or</p>
          <div className="flex gap-4 lg:flex-row flex-col pb-6">
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input
                type="name"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="email">Work Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
          </div>
          <div>
            <p className="mt-3 mb-4">Extra information for job seeker</p>
            <div className="flex flex-col pb-6">
              <label htmlFor="gender">Gender</label>
              <input
                type="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="job">Job</label>
              <input
                type="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="description">Describe what you offer</label>
              <textarea
                type="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0 bg-gray-50"
              ></textarea>
            </div>
          </div>
          <div className="w-1/2 m-auto">
            <button
              className="text-center bg-violet-400 text-gray-50 px-4 py-2 rounded-xl font-semibold mb-10"
              type="submit"
            >
              Create my account
            </button>
          </div>
          <p className="text-center mb-6">
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

export default Workersignup;
