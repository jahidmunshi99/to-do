import { useAuthState } from "react-firebase-hooks/auth";
import { FaPlus } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { auth } from "../../Firebase/firebase.config.js";

const TaskActions = ({ onAddClick }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      {/* <!-- Profile Card --> */}
      <div className=" text-black gap-4 shadow h-fit flex flex-col justify-between order-2 md:order-1 rounded border border-[rgba(206,206,206,0.12)] p-2">
        <div className="bg-white rounded md:p-1 sm:p-2 flex flex-col items-center text-center">
          {user.photoURL ? (
            <img
              className="border-black !border-3 bg-amber-100 rounded-full"
              src={user.photoURL}
              alt={user.displayName}
            />
          ) : (
            <IoMdContact className="text-6xl text-gray-500" />
          )}
          <h2 className="font-bold text-lg">Admin</h2>
          <p className="text-gray-500 text-sm mb-4">{user.displayName}</p>
        </div>
        <div className="bg-white rounded md:p-6 sm:p-2">
          <button
            className="!bg-black w-full flex items-center gap-3 hover:bg-blue-500 text-white py-2 rounded my-2 text-left px-4"
            onClick={onAddClick}
          >
            <FaPlus />
            Add New Task
          </button>
          <button className="!bg-black w-full flex items-center gap-3 hover:bg-blue-500 text-white py-2 rounded my-2 text-left px-4">
            <FaPlus />
            Add User
          </button>
          <button className="!bg-black w-full flex items-center gap-3 hover:bg-blue-500 text-white py-2 rounded my-2 text-left px-4">
            <IoSettingsOutline />
            Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskActions;
