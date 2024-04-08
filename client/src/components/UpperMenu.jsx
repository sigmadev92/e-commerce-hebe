import { TbHeartSearch } from "react-icons/tb";
import { FcBusinesswoman } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../redux/slices/user";
import { useEffect } from "react";
import { AuthUser } from "../routes/basicAuth";
export default function UpperMenu() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
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
    <div className=" py-[20px] hidden md:block">
      <div className="flex space-x-5">
        <ul className="md:flex space-x-5 md:visible mr-[50px] font-light">
          <li>BRANDS</li>
          <li>SHOP</li>
          <li>MY BOYFRIENDS BACK</li>
          <li>STAFF EDIT</li>
        </ul>
        <ul className="flex space-x-4">
          {currentUser ? (
            <li title="profile">
              <Link to="/profile">
                <FcBusinesswoman className="text-[30px]" />
              </Link>{" "}
            </li>
          ) : (
            <li title="Login">
              <Link to="/login">
                <FcBusinesswoman className="text-[30px]" />
              </Link>
            </li>
          )}
          <li title="search">
            <Link to="/search">
              <TbHeartSearch className="text-[30px]" />
            </Link>
          </li>
          <li title="your cart">
            <FaCartPlus className="text-[30px]" />
          </li>
          {currentUser && (
            <li title="log out">
              <Link to="/login">
                <GrLogout
                  className="text-[30px]"
                  onClick={() => {
                    dispatch(SetCurrentUser(null));
                    localStorage.setItem("Token", "");
                  }}
                />
              </Link>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
