import { FaEdit, FaEye } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { UseAuth } from "../../Providers/AuthProvider";

const TaskList = ({ onEdit, onView, onDelete }) => {
  const { data } = UseAuth();
  {
    /** Task Filtering */
  }
  const avialabeTasks = data.filter(
    (item) => item.order_status !== "completed"
  );
  const isNew = data.filter((item) => item.order_status === "new");
  const isRevision = data.filter((item) => item.order_status === "revision");
  const isDelivered = data.filter((item) => item.order_status === "delivered");
  return (
    <>
      {/* <!-- Active Orders --> */}
      <div className="md:col-span-3 bg-transparent text-black order-1 md:order-2 rounded border border-[rgba(206,206,206,0.12)] p-4">
        <div className="flex justify-between items-center mb-4 bg-white text-black p-4 border-0 rounded">
          <h2 className="font-bold text-lg">
            Active orders - ({avialabeTasks.length})
          </h2>
          <select className="border rounded px-2 py-1">
            <option>Active orders ({avialabeTasks.length})</option>
            <option>New orders ({isNew.length})</option>
            <option>In Revision ({isRevision.length})</option>
            <option>Delivered ({isDelivered.length})</option>
          </select>
        </div>

        {/* { Task Lists} */}
        {data.length == 0 ? (
          <div className="text-green-500 text-center py-10 text-xl">
            No Task Yet
          </div>
        ) : (
          <div className="space-y-4 ">
            {/* <!-- Order Item --> */}
            {avialabeTasks?.map((task, index) => {
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
                        {task?.client_id} | {task?.client_name}
                      </p>
                      <div className="text-gray-500 text-sm">
                        <span className="font-semibold text-black mr-2">
                          Type:
                        </span>

                        <div className="inline-flex flex-wrap gap-1 my-1">
                          {task?.delivery_file?.map((item, index) => (
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
                        {task?.delivery_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-3 mt-2 md:mt-0 ">
                    {task?.order_status === "new" && (
                      <span className="bg-fuchsia-800 text-white px-2 py-1 rounded text-xs">
                        ACTIVE
                      </span>
                    )}
                    {task?.order_status === "revision" && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                        REVISION
                      </span>
                    )}
                    {task?.order_status === "delivered" && (
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
                          onEdit(task);
                        }}
                      >
                        <FaEdit className="text-xl text-blue-600 hover:text-black" />
                      </button>
                      <button onClick={() => onDelete(task.id)}>
                        <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
