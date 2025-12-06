import axios from "axios";
import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [showTask, setShowTask] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  useEffect(() => {
    axios
      .get("../data/data.json") // path relative to public folder
      .then((res) => setShowTask(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(showTask);

  function handleAddEditTask(saveNewTask) {
    console.log(saveNewTask);
    setShowTask([...showTask, saveNewTask]);
    setAddTask(false);
  }

  function handleClickEditTask(updateTask) {
    setTaskToUpdate(updateTask);
    setAddTask(true);
  }

  function handleClose() {
    setTaskToUpdate(null);
    setAddTask(false);
  }

  return (
    <>
      {addTask && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onClose={handleClose}
        />
      )}
      <section className="py-25" id="tasks">
        <div className="container">
          {/**-- Search Box --*/}
          <div className="py-5 flex justify-end">
            <SearchBox />
          </div>
          {/**-- Search Box Ends --*/}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddTask={() => setAddTask(true)} />
            <TaskList tasks={showTask} onEdit={handleClickEditTask} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
