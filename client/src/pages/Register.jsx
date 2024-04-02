import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [formData, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { email, password, phone, name } = formData;

  function handleClick(e) {
    console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="w-80 bg-blue-300 h-[280px] mx-auto my-[40px]">
      <h1 className="text-center font-bold bg-orange-500 p-4">
        USER REGISTERATION PANEL - HEBE
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="px-2 space-y-3 py-3">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="your full name..."
          className="w-full px-3 text-violet-400"
          onChange={(e) => handleClick(e)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="enter your email"
          className="w-full px-3 text-violet-400"
          onChange={(e) => handleClick(e)}
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="your contact number..."
          className="w-full px-3 text-violet-400"
          onChange={(e) => handleClick(e)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password..."
          className="w-full px-3 text-violet-400"
          onChange={(e) => handleClick(e)}
        />
        <button className="text-sm bg-black text-white w-full py-1 hover:bg-green-400 ">
          REGISTER
        </button>
        <Link to="/login" className="text-[12px] hover:bg-white">
          Already Have an account ? Login.
        </Link>
        <Link
          to="/forgot-password"
          className="text-[12px] bg-red-300 px-2 ml-2 hover:bg-white hover:p-1"
        >
          Forgot Password
        </Link>
      </form>
    </div>
  );
}
