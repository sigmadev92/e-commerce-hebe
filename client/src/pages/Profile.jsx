import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const { name, email, password, phone } = currentUser;
  return (
    <div>
      <h1 className="text-center font-bold bg-red-200">Profile Panel</h1>
      <div className="w-fit m-auto h-[200px] bg-black mt-20 text-white rounded-[20px] p-2">
        <h1 className="text-center font-medium">Your Details</h1>
        <ul>
          <li>Name : {name}</li>
          <li>Email : {email}</li>
          <li>Password : {password}</li>
          <li>Phone : {phone}</li>
        </ul>
      </div>
    </div>
  );
}
