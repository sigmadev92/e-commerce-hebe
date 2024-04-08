import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../redux/slices/user";
import { AuthUser } from "../routes/basicAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    async function authenticate() {
      console.log(currentUser);
      try {
        const response = await AuthUser();
        if (response.success) dispatch(SetCurrentUser(response.userData));
      } catch (error) {
        console.log(error);
      }
    }
    if (localStorage.getItem("Token") !== "") authenticate();
  }, []);
  return (
    <div className="m-3">
      <h1 className="font-bold text-center bg-red-200">Home</h1>
      {/* <button onClick={() => console.log(currentUser)}>details</button> */}
      {currentUser && (
        <>
          <h1>
            Hello, <span className="font-bold">{currentUser.name}</span>,
            welcome home
          </h1>
          <button
            className="bg-red-300 text-[10px] p-2 hover:bg-slate-600 rounded-[20px]"
            onClick={() => navigate("/register-product")}
          >
            UPLOAD YOUR STUFF
          </button>
        </>
      )}
    </div>
  );
}
