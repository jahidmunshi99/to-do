import TaskItem from "../../Components/TaskItem";
import { UseAuth } from "../../Providers/AuthProvider";
const TaskList = ({ onEdit, onView, onDelete }) => {
  const { data, search, loading } = UseAuth();

  // const [tasks, setTasks] = useState([]);

  let taskList = [];
  console.log(taskList);

  const statusOrder = ["awaiting_review", "new", "revision", "delivered"];

  if (search && search.length > 0) {
    taskList = search;
  } else {
    const items = data.filter((item) => item.order_status !== "completed");
    taskList = items;
  }

  taskList.sort(
    (a, b) =>
      statusOrder.indexOf(a.order_status) - statusOrder.indexOf(b.order_status),
  );

  // const avialabeTasks = data.filter(
  //   (item) => item.order_status !== "completed"
  // );
  const isNew = data.filter((item) => item.order_status === "new");
  const isRevision = data.filter((item) => item.order_status === "revision");
  const isDelivered = data.filter((item) => item.order_status === "delivered");

  return (
    <>
      {/* <!-- Active Orders --> */}
      <div className="md:col-span-3 bg-transparent text-black order-1 md:order-2 rounded border border-[rgba(206,206,206,0.12)] p-4">
        <div className="flex justify-between items-center mb-4 bg-white text-black p-4 border-0 rounded">
          <h2 className="font-bold text-lg">
            Active orders - ({taskList.length})
          </h2>
          <select className="border rounded px-2 py-1">
            <option>Active orders ({taskList.length})</option>
            <option>New orders ({isNew.length})</option>
            <option>In Revision ({isRevision.length})</option>
            <option>Delivered ({isDelivered.length})</option>
          </select>
        </div>

        {/* { Task Lists} */}
        {taskList.length == 0 ? (
          <div className="text-green-500 text-center py-10 text-xl">
            No Task Yet
          </div>
        ) : (
          <div className="space-y-4 ">
            {/* <!-- Order Item --> */}
            {taskList?.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
