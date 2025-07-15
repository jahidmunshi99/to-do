import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTaks = [
    {
      id: crypto.randomUUID(),
      title: "React Learning",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius incidunt magni voluptatibus fugiat ipsa laboriosam sequi mollitia expedita, quos recusandae eligendi perspiciatis voluptates ipsum fugit quia illo iste tempore qui?",
      tags: ["web", "React", "Api"],
      priority: "high",
      isfevorite: true,
    },
  ];

  const [showTask, setShowTask] = useState(defaultTaks);
  const [addTask, setAddTask] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

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
      <section className="mb-20" id="tasks">
        <div className="container">
          {/**-- Search Box --*/}
          <div className="p-2 flex justify-end">
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
