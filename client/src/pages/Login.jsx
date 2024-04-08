import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../routes/basicAuth";
import { useDispatch, useSelector } from "react-redux";
import user, { SetCurrentUser } from "../redux/slices/user";
export default function Login() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [errorMsg, setErrormsg] = useState("");
  const navigate = useNavigate();
  function handleClick(e) {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        localStorage.setItem("Token", response.token);
        dispatch(SetCurrentUser(response.userData));
        navigate("/profile");
      } else {
        setErrormsg(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-80 bg-blue-300 h-[250px] mx-auto my-[40px]">
      <h1 className="text-center font-bold bg-orange-500 p-4">
        LOGIN PANEL - HEBE
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="px-2 space-y-3 py-3">
        {errorMsg !== "" && <span className="text-red-300">{errorMsg}</span>}
        <input
          type="text"
          name="email"
          value={email}
          placeholder="enter your email"
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
        <button className="text-sm bg-black text-white w-full py-1 hover:bg-green-400">
          LOGIN
        </button>
        <Link to="/register" className="text-[12px] hover:bg-white">
          Don't Have an account ? Register.
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
