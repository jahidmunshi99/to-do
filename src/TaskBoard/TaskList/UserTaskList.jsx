import { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import SearchBox from "../SearchBox/index";

const UserTaskList = ({ onEdit, onView, onDelete }) => {
  const [tasks, setTasks] = useState([
    {
      client_id: "1110",
      delivery_file: ["epub", "Paperback"],
      delivery_date: "12/12/2025",
      order_status: "delivered",
    },
    {
      client_id: "5555",
      delivery_file: ["epub", "Paperback"],
      delivery_date: "12/12/2025",
      order_status: "revision",
    },
    {
      client_id: "1422",
      delivery_file: ["epub", "Paperback"],
      delivery_date: "12/12/2025",
      order_status: "new",
    },
    {
      client_id: "12",
      delivery_file: ["epub", "Paperback"],
      delivery_date: "12/12/2025",
      order_status: "new",
    },
  ]);
  return (
    <>
      <section className="py-25" id="tasks">
        <div className="container">
          {/**-- Search Box --*/}
          <div className="py-5 flex justify-end">
            <SearchBox />
          </div>
          <div className="bg-[#1D212B]w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* <!-- Profile Card --> */}
            <div className=" text-black bg-white gap-4 shadow h-fit flex flex-col justify-between order-2 md:order-1 rounded border border-[rgba(206,206,206,0.12)] p-2">
              <div className="flex flex-col items-center text-center">
                <IoMdContact className="text-6xl text-gray-500" />
                <h2 className="font-bold text-lg">Imran Hossain</h2>
                <p className="text-gray-500 text-sm mb-4">Team Leader</p>
              </div>

              <div className="mt-6 text-center mx-auto overflow-y-auto">
                <h3 className="font-semibold mb-2">Level overview</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="text-center">
                    <span className="font-semibold">eMail:</span>{" "}
                    imranhossain@gmail.com
                  </li>
                  <li>
                    <span className="font-semibold">Success score:</span> 9
                  </li>
                  <li>
                    <span className="font-semibold">Rating:</span> ★ 4.8
                  </li>
                  <li>
                    <span className="font-semibold">Response rate:</span> 100%
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Active Orders --> */}
            <div className="md:col-span-3 bg-transparent text-black order-1 md:order-2 rounded border border-[rgba(206,206,206,0.12)] p-4">
              <div className="flex justify-between items-center mb-4 bg-white text-black p-4 border-0 rounded">
                <h2 className="font-bold text-lg">
                  Active orders - ({tasks.length})
                </h2>
                <select className="border rounded px-2 py-1">
                  <option>Active orders (7)</option>
                  <option>In Revision (5)</option>
                  <option>Delivered (15)</option>
                </select>
              </div>

              {/* { Task Lists} */}
              <div className="space-y-4 ">
                {/* <!-- Order Item --> */}
                {tasks.map((task) => {
                  return (
                    <div
                      key={task}
                      className="flex flex-col md:flex-row justify-between md:items-center bg-gray-50 px-4 py-3 rounded"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-3">
                        <IoMdContact className="text-6xl text-gray-500" />
                        <div className="lg:text-left md:text-center">
                          <p className="font-semibold">
                            <span>ID: </span>
                            {task.client_id}
                          </p>
                          <div className="text-gray-500 text-sm">
                            <span className="font-semibold text-black mr-2">
                              Type:
                            </span>

                            <div className="inline-flex flex-wrap gap-1 my-1">
                              {task.delivery_file.map((item, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-800 text-white px-2 py-1 rounded text-xs"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-red-500 text-sm">
                            <span className="font-semibold text-black">
                              Delivery :
                            </span>{" "}
                            {task.delivery_date}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-3 mt-2 md:mt-0 ">
                        {task.order_status === "new" && (
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                            ACTIVE
                          </span>
                        )}
                        {task.order_status === "revision" && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                            REVISION
                          </span>
                        )}
                        {task.order_status === "delivered" && (
                          <span className="bg-cyan-700 text-white px-2 py-1 rounded text-xs">
                            DELIVERED
                          </span>
                        )}
                        <div className="flex gap-4 md:gap-3 md:ml-5">
                          <button
                            href="#"
                            className="text-green-600 font-semibold text-sm"
                            onClick={() => onView()}
                          >
                            <FaEye className="text-xl hover:text-blue-500" />
                          </button>
                          <button
                            onClick={() => {
                              onEdit();
                            }}
                          >
                            <FaEdit className="text-xl text-green-500 hover:text-black" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserTaskList;
