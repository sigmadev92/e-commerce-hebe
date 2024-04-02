import { useNavigate } from "react-router-dom";
import "../css/menu.css";
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-10 w-full bg-black text-white md:hidden ">
      <ul className="text-center font-mono">
        <li>BRANDS</li>
        <li>SHOP</li>
        <li>MY BOYFRIENDS BACK</li>
        <li>STAFF EDIT</li>
        <li onClick={() => navigate("/login")}>LOG IN</li>
        <li>SEARCH</li>
      </ul>
    </div>
  );
}
