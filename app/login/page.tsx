import React from "react";
import Header from "@/components/HEADER"; 
import Navbar from "@/components/Navigation";
import Footer from "@/components/FOOTER";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot your password?
            </a>
            <p className="mt-2 text-sm">
              Dont have an account?{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Join Us
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
