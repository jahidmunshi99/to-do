import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { DotLoader } from "react-spinners";
import { updateOrderStatus } from "../../FetchData/updatePosts";
import { UseAuth } from "../../Providers/AuthProvider";
import OrderStatus from "../common/OrderStatus";
import SearchBar from "../common/SearchBar";

const UserTaskBoard = ({ onView }) => {
  const { data, setData, user, loading } = UseAuth();
  const [showActionModal, setShowActionModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [message, setMessage] = useState({ error: false, message: "" });

  const taskList = data.filter(
    (item) =>
      item.order_status !== "completed" && item.order_status !== "delivered"
  );

  useEffect(() => {
    if (!message.message) return;
    message.error
      ? toast.error(message.message)
      : toast.success(message.message);
  }, [message]);

  const handleAction = (e) => {
    setShowActionModal(!showActionModal);
    setTaskToEdit(e);
  };

  const handleOrderStatus = (postId, deliveryStatus) => {
    toast(
      (t) => (
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-orange-300">
            <span className="text-4xl font-bold text-orange-400">!</span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Are you sure?
          </h2>

          <p class="mt-2 text-gray-500">You won't be able to revert this!</p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition"
              onClick={() => {
                toast.dismiss(t.id);
                confirmUpdate(postId, deliveryStatus);
              }}
            >
              Yes, {deliveryStatus} it!
            </button>

            <button
              className="rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const confirmUpdate = async (docId, deliveryStatus) => {
    try {
      await updateOrderStatus(docId, deliveryStatus);
      setShowActionModal(false);
      setData(data);
      setMessage({ error: false, message: "You have successfully Updated" });
    } catch (error) {
      setMessage({ error: false, message: error.message || "Updated Faield" });
    }
    const updateData = data.filter((item) => item.id !== docId);
    setData(updateData);
  };

  return (
    <>
      <Toaster />
      {loading && <DotLoader color="#57ffa3" />}
      <section className="py-25" id="tasks">
        <div className="container">
          {/**-- Search Box --*/}
          <div className="py-5 flex justify-end">
            <SearchBar />
          </div>
          <div className="bg-[#1D212B]w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* <!-- Profile Card --> */}
            <div className=" text-black bg-white gap-4 shadow h-fit flex flex-col justify-between order-2 md:order-1 rounded border border-[rgba(206,206,206,0.12)] p-2">
              <div className="flex flex-col items-center text-center">
                {user?.photoURL ? (
                  <img
                    className="rounded-full border border-b-gray-950 bg-indigo-300"
                    src={user.photoURL}
                    alt="image"
                  />
                ) : (
                  <IoMdContact className="text-6xl text-gray-500" />
                )}
                <h2 className="font-bold text-lg">
                  {user?.displayName || "Imran Hossain"}
                </h2>
                <p className="text-gray-500 text-sm mb-4">Team Leader</p>
              </div>

              <div className="mt-6 text-center mx-auto overflow-y-auto">
                <h3 className="font-semibold mb-2">Level overview</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="text-center">
                    <span className="font-semibold">eMail:</span> {user?.email}
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
              <OrderStatus items={taskList} />

              {/* { Task Lists} */}
              <div className="space-y-4 relative">
                {/* <!-- Order Item --> */}
                {taskList.map((task, index) => {
                  return (
                    <div
                      key={index}
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
                      <div className="flex flex-col md:flex-row items-center gap-3 mt-2 md:mt-0">
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
                        {task.order_status === "awaiting_to_review" && (
                          <span className="bg-fuchsia-600 text-white px-2 py-1 rounded text-xs uppercase">
                            Awaiting to Admin Review
                          </span>
                        )}
                        {task.order_status === "completed" && (
                          <span className="bg-fuchsia-700 text-white px-2 py-1 rounded text-xs">
                            COMPLETED
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
                          <button onClick={() => handleAction(task.id)}>
                            <HiDotsVertical className="text-xl hover:text-green-500" />
                          </button>
                        </div>
                      </div>
                      {/** Action Panel */}
                      {showActionModal ||
                        (taskToEdit === task.id && (
                          <div className="absolute right-10 w-[150px]  text-center py-3 rounded border border-gray-700 bg-gray-800">
                            <ul className="text-white w-full">
                              <li
                                className="hover:bg-gray-600 hover:text-white text-sm w-full px-2 cursor-pointer"
                                onClick={() => {
                                  handleOrderStatus(
                                    task.id,
                                    "awaiting_to_review"
                                  );
                                  setShowActionModal(!showActionModal);
                                }}
                              >
                                Delivered
                              </li>
                              <li
                                className="hover:bg-gray-600 hover:text-white text-sm w-full px-2 mt-1 cursor-pointer"
                                onClick={() => {
                                  handleOrderStatus(task.id, "revision");
                                  setShowActionModal(!showActionModal);
                                }}
                              >
                                Revision
                              </li>
                            </ul>
                          </div>
                        ))}
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

export default UserTaskBoard;
