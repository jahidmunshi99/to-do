import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const TaskList = ({ tasks, onEdit, onView }) => {
  console.log(tasks);
  return (
    <div className="w-full">
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <table className="table-fixed w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="p-4 text-sm font-semibold w-[3%] text-left">Sl</th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Client ID
              </th>
              <th className="p-4 text-sm font-semibold w-[22%] text-left">
                Customer Name
              </th>
              <th className="p-4 text-sm font-semibold w-[15%] text-center">
                Service Type
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-left">
                Platform
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Status
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Client Category
              </th>

              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Delivery Date
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-[#2E3443] [&>td]:align-top [&>td]:px-4 [&>td]:py-2"
                >
                  {/* Favorite Icon */}
                  <td className="text-left">
                    {task.isfevorite ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaStar className="text-gray-400" />
                    )}
                  </td>

                  <td className="text-center">{task.client_id}</td>
                  <td className="text-left">{task.client_name}</td>
                  <td className="text-left">{task.project_title}</td>
                  <td className="text-center">{task.orderType}</td>
                  <td className="text-center">
                    {task.orderStatus ? "Pending" : "Delivered"}
                  </td>
                  <td className="text-center">{task.author}</td>
                  <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                      <li>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Kindle
                        </span>
                      </li>
                    </ul>
                  </td>

                  <td>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        className="text-[#00D991]"
                        onClick={() => onView(task)}
                      >
                        <IoEyeOutline className="text-xl" />
                      </button>
                      <button
                        className="text-blue-500"
                        onClick={() => onEdit(task)}
                      >
                        <FaEdit className="text-xl" />
                      </button>
                      <button className="text-red-500">
                        <MdDeleteForever className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Responsive Card View */}
      <div className="md:hidden space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#1F2430] p-4 rounded-lg border border-[#2E3443]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold">
                Client ID: {task.client_id}
              </h3>
              {task.isfevorite ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaStar className="text-gray-400" />
              )}
            </div>

            <p className="text-sm">
              <span className="font-semibold">Client Name:</span>{" "}
              {task.client_name}
            </p>
            <div className="mt-2">
              <span className="font-semibold text-sm">Type:</span>
              <ul className="flex gap-1.5 flex-wrap mt-1">
                <li>
                  <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                    Kindle
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-sm mt-2">
              <span className="font-semibold">Order Status:</span>
              {task.orderStatus ? "Pending" : "Delivered"}
            </p>

            <p className="text-sm mt-1">
              <span className="font-semibold">Priority:</span> {task.priority}
            </p>

            <div className="flex items-center justify-end space-x-3 mt-4">
              <button className="text-blue-500" onClick={() => onEdit(task)}>
                Edit
              </button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
