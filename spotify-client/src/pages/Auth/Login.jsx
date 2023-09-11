import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" h-full flex flex-col">
      <div className="px-[80px] py-6 flex items-center bg-black">
        <img src={logo} className="h-[40px] " alt="" />
      </div>
      <div className="flex-1 py-10 bg-black bg-login bg-no-repeat bg-cover flex items-center justify-center">
        <div className="bg-black px-[100px] py-[30px] w-2/5 rounded-xl flex flex-col items-center">
          <div className="text-center text-white font-poppins text-[48px] font-semibold my-[48px]">
            <h1>Log in to spotify</h1>
          </div>
          <hr className="bg-[rgba(0,0,0, 0.5)] opacity-50 w-full mb-[35px]" />
          <form className="flex w-full items-center flex-col gap-5">
            <div className="w-full flex flex-col">
              <label
                className="text-sm text-white font-semibold font-poppins mb-[10px]"
                htmlFor="email"
              >
                Email or username
              </label>
              <input
                className="bg-[#121212] border-[1px] border-[#727272] rounded-[3px] py-[8px] px-3"
                type="email"
                placeholder="Email or username"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                className="text-sm text-white font-semibold font-poppins mb-[10px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-[#121212] border-[1px] border-[#727272] rounded-[3px] py-[8px] px-3"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="w-full mt-[10px]">
              <button className="bg-[#1ed760] w-full py-[10px] font-bold text-black rounded-3xl ">
                Log in
              </button>
            </div>
            <hr className="bg-[rgba(0,0,0, 0.5)] opacity-50 w-full my-[20px]" />
            <div className="w-full">
              <p className="text-center text-neutral-500 font-semibold">
                Dont have an Account? <Link to={"/register"} className="text-white underline ml-[8px] cursor-pointer">Sign up for spotify</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
