import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import EmailIcon from "../Icons/EmailIcon";
import FingerprintIcon from "../Icons/FingerprintIcon";
import PasswordLockIcon from "../Icons/PasswordLockIcon";
import PersonIcon from "../Icons/PersonIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../state/slices/slice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const newData = {
      firstName,
      lastName,
      age: Number(age),
      email,
      password,
    };
    console.log(newData);
    // Dispatch the registerData action with the newData object
    dispatch(registerUser(newData));
    navigate("/home");
  };
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Road Status</h1>
          <p className="text-white mt-1">The most popular peer to peer road statuses sharing</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleRegisterSubmit} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Join us now</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">The largest online community for road statuses sharing</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <PersonIcon />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="pl-2 outline-none border-none"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <FingerprintIcon />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="pl-2 outline-none border-none"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <CodeBracketSquareIcon className="h-5 w-5 text-gray-400" />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="pl-2 outline-none border-none"
              type="text"
              name="age"
              id="age"
              placeholder="Age"
              min="18"
              max="99"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <EmailIcon />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordLockIcon />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
