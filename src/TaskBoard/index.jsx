import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SignModal from "../Authentication/SinginModal/index.jsx";
import { deletePost } from "../FetchData/DeleteData.js";
import { createPost } from "../FetchData/PostData.js";
import { updatePost } from "../FetchData/UpdateData.js";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions/index.jsx";
// import TaskList from "./TaskList/index.jsx";
import UserTaskList from "./TaskList/UserTaskList.jsx";
import ViewTaskModal from "./ViewTaskModal/index#1.jsx";

const TaskBoard = () => {
  const [data, setData] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [showViewModal, setShowViewModal] = useState(null);
  const [message, setMessage] = useState({ error: false, message: "" });
  const [sign, setSignIn] = useState(true);

  useEffect(() => {
    const requestDb = async () => {
      try {
        const res = await axios.get("https://phdb-api.onrender.com/posts");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    requestDb();

    if (!message.message) return;
    message.error
      ? toast.error(message.message)
      : toast.success(message.message);
  }, [message]);

  const handleAddTask = async (newTask, isNew) => {
    try {
      if (isNew) {
        const res = await createPost(newTask);
        setData((prev) => [...prev, res.data]);
        setMessage({ error: false, message: "Successfully Added" });
      } else {
        await updatePost(newTask.id, newTask);
        setData(
          data.map((task) => {
            if (task.id === newTask.id) {
              return newTask;
            }
            return task;
          })
        );
        setMessage({ error: false, message: "Successfully Updated" });
      }
      setTaskToUpdate(null);
      setShowTaskModal(false);
    } catch (error) {
      setMessage({ error: true, message: `${error}` });
    }
  };

  function handleEditTask(updateTask) {
    setTaskToUpdate(updateTask);
    setShowTaskModal(true);
  }

  const handleClose = () => {
    setTaskToUpdate(null);
    setShowTaskModal(false);
    setShowViewModal(false);
  };

  const handleDeltePost = (postId) => {
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
                confirmDelete(postId);
              }}
            >
              Yes, delete it!
            </button>

            <button
              className="rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600 transition"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
        // </div>
      ),
      { duration: Infinity }
    );
  };

  const confirmDelete = async (postId) => {
    try {
      await deletePost(postId);
      setMessage({ error: false, message: "You have successfully Deleted" });
    } catch (error) {
      setMessage({ error: false, message: error.message || "Delete Faield" });
    }
    const updateData = data.filter((item) => item.id !== postId);
    setData(updateData);
  };

  function handleView() {
    setShowViewModal(true);
  }

  return (
    <>
      <Toaster />
      {showTaskModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onClose={handleClose}
        />
      )}

      {!sign && <SignModal />}
      {showViewModal && <ViewTaskModal onClose={handleClose} task={data} />}
      <section className="py-25" id="tasks">
        <div className="container">
          {/**-- Search Box --*/}
          <div className="py-5 flex justify-end">
            <SearchBox />
          </div>
          {/**-- Search Box Ends --*/}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddTask={() => setShowTaskModal(true)} />
            {/* <TaskList
              tasks={data}
              onEdit={handleEditTask}
              onView={handleView}
              onDelete={handleDeltePost}
            /> */}
            <UserTaskList
              tasks={data}
              onEdit={handleEditTask}
              onView={handleView}
              onDelete={handleDeltePost}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
