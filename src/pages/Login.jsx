import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully");
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="lg:px-48 px-10 pt-6 bg-gray-50 pb-10">
      <Logo />
      <div className="mt-16 border border-slate-500 lg:w-1/2  text-center m-auto lg:py-14 py-8 rounded-xl">
        <h2 className="lg:text-2xl text-lg font-semibold">Login To Workbuddy</h2>

        <form action="" onSubmit={handleLogin}>
          <div className="border-2 border-slate-200 bg-gray-50 px-2 rounded-lg lg:py-3 py-1 mt-5 w-2/3 m-auto flex gap-2">
            <FaRegUser className="mt-0.5 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Username or Email"
              className="bg-gray-50 outline-0 border-0"
            />
          </div>
          <div className="border-2 border-slate-200 bg-gray-50 px-2 rounded-lg lg:py-3 py-1 mt-5 w-2/3 m-auto flex gap-2">
            <FiLock className="mt-0.5 text-slate-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="bg-gray-50 outline-0 border-0"
            />
          </div>

          <button
            className="mt-5 bg-violet-400 hover:bg-violet-500 py-3 lg:px-32 px-16 rounded-lg text-gray-50 font-semibold mb-5 text-center"
            type="submit"
          >
            Continue
          </button>
          <p>or</p>
          <div className="flex flex-col gap-3 mt-5 lg:text-base text-sm">
            <button className="border border-slate-500 font-semibold w-2/3 m-auto py-3 rounded-lg flex gap-2 lg:px-14 px-7">
              <img
                src={google}
                alt="google-logo"
                className="w-4 mt-0.5"
              />
              Continue with Google
            </button>
            <button className="border border-slate-500 w-2/3 m-auto font-semibold py-3 rounded-lg mt-2 flex gap-2 lg:px-14 px-7">
              <FaApple className="mt-0.5" />
              Continue with Apple
            </button>
          </div>
          <p className="lg:mt-20 mt-5 mb-10 lg:text-base text-sm">Don't have a WorkBuddy account?</p>

          <Link
            to="/signup"
            className="border border-violet-400 rounded-lg lg:px-24 px-12 text-violet-400 font-semibold py-2 hover:bg-violet-500 hover:border-violet-500 hover:text-gray-50"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
