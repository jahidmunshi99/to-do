import { useEffect, useState } from "react";
import { getPosts, getUsers } from "../FetchData/FetchData.js";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import ViewTaskModal from "./ViewTaskModal/index.jsx";

const TaskBoard = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [showViewModal, setShowViewModal] = useState(null);

  useEffect(() => {
    const data = async () => {
      const postData = await getPosts();
      setData(postData);
      const usersData = await getUsers();
      setUsers(usersData);
    };
    data();
  }, []);

  function handleAddTask(newTask, isNew) {
    console.log(newTask);
    if (isNew) {
      setData([...data, newTask]);
    } else {
      setData(
        data.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setTaskToUpdate(null);
    setShowTaskModal(false);
    console.log(data);
  }

  function handleEditTask(updateTask) {
    setTaskToUpdate(updateTask);
    setShowTaskModal(true);
  }

  function handleClose() {
    setTaskToUpdate(null);
    setShowTaskModal(false);
    setShowViewModal(false);
  }

  function handleView() {
    setShowViewModal(true);
  }

  return (
    <>
      {showTaskModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onClose={handleClose}
        />
      )}
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
            <TaskList
              tasks={data}
              onEdit={handleEditTask}
              onView={handleView}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
