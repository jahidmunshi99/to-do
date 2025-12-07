import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const TaskList = ({ tasks, onEdit }) => {
  return (
    <div className="w-full">
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <table className="table-fixed w-full">
          <thead className="bg-gray-950/10">
            <tr>
              <th className="p-4 text-sm font-semibold w-[2%] text-left"></th>
              <th className="p-4 text-sm font-semibold w-[8%] text-center">
                Client ID
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-left">
                Name
              </th>
              <th className="p-4 text-sm font-semibold w-[15%] text-left">
                Title
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Order Type
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Status
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Author
              </th>
              <th className="p-4 text-sm font-semibold w-[20%] text-center">
                Delivery File
              </th>
              <th className="p-4 text-sm font-semibold w-[10%] text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
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

                <td className="text-center">{task.clientId}</td>
                <td className="text-left">{task.client_name}</td>
                <td className="text-left">{task.project_title}</td>
                <td className="text-center">{task.orderType}</td>
                <td className="text-center">{task.orderStatus}</td>
                <td className="text-center">{task.author}</td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>

                <td>
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-[#00D991]">
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
            ))}
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
                Client ID: {task.clientId}
              </h3>
              {task.isfevorite ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaStar className="text-gray-400" />
              )}
            </div>

            <p className="text-sm">
              <span className="font-semibold">Service Title:</span> {task.title}
            </p>

            <div className="mt-2">
              <span className="font-semibold text-sm">Type:</span>
              <ul className="flex gap-1.5 flex-wrap mt-1">
                {task.tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm mt-2">
              <span className="font-semibold">Order Status:</span>{" "}
              {task.orderStatus}
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
