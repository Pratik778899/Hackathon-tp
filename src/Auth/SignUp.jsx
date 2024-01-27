import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className="bg-gray-100 p-8 w-96 mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <label className="block">Email:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label className="block">Password:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label className="block">Confirm Password:</label>
        <input
          className="border-2 border-gray-700 rounded-mg p-2 w-full mb-4"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
    </>
  );
};

export default SignUp;
