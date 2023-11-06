"use client";
import React, { useState } from "react";

export default function Login() {
  const inputStyle = {
    color: "black",
  };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    // Format email regex
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email harus diisi");
    } else if (!validateEmail(email)) {
      setEmailError("Email tidak valid");
    }
    
    if (!password) {
      setPasswordError("Password harus diisi");
    }

    if(email && password) {
       // logic login berhasil
    }
  };

  return (
    <div className="container h-screen w-full bg-[url('/img/login.png')] bg-no-repeat bg-cover">
      <div className="h-screen flex items-center justify-center">
        <div className="w-[400px] border-2 bg-opacity-25 backdrop-blur-md bg-white p-8 rounded-3xl shadow-md">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-8">Login</h2>
            <form>
              <div className="mb-8">
                <label className="block text-white text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  style={inputStyle}
                  className="w-full p-2 border rounded-md"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-red-500">{emailError}</p>
              </div>
              <div className="mb-8">
                <label className="block text-white text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  style={inputStyle}
                  className="w-full p-2 border rounded-md"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-red-500">{passwordError}</p>
              </div>
              <button
                type="submit"
                className="w-full bg-[#BD0C47] text-white p-2 rounded-md hover:bg-blue-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
