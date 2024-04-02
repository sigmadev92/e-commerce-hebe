import { TbHeartSearch } from "react-icons/tb";
import { FcBusinesswoman } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function UpperMenu() {
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
          <li title="Login">
            <Link to="/login">
              <FcBusinesswoman className="text-[30px]" />
            </Link>
          </li>
          <li title="search">
            <Link to="/search">
              <TbHeartSearch className="text-[30px]" />
            </Link>
          </li>
          <li title="your cart">
            <FaCartPlus className="text-[30px]" />
          </li>
        </ul>
      </div>
    </div>
  );
}
