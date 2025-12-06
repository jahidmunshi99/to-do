import { useState } from "react";
const AddTaskModal = ({ onSave, taskToUpdate, onClose }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isfevorite: false,
    }
  );

  const [isNew, setIsNew] = useState(Object.is(taskToUpdate, null));

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  }
  return (
    <>
      <div className="bg-gray-500/80 h-full w-full z-10 absolute top-0 left-0"></div>
      <htmlForm className="mx-auto my-10 w-full max-w-[560px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px] ">
          {isNew ? "Add New Task" : "Edit Task"}
        </h2>

        {/**-- inputs -- */}
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="flex justify-between items-center gap-5">
            {/**-- Clients ID -- */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Client Number</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>
            {/**-- Client Name -- */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Client Name</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/**-- title -- */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Job Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          {/**-- description -- */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Message</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center gap-5">
            {/**-- Budget -- */}
            <div className="space-y-2 lg:space-y-3 w-[20%]">
              <label htmlFor="title">Budget</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>
            {/**-- Delivery Date -- */}
            <div className="space-y-2 lg:space-y-3 w-[30%]">
              <label htmlFor="deliveryDate">Delivery Date</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-white"
                type="date"
                name="deliveryDate"
                id="deliveryDate"
                value={task.deliveryDate}
                onChange={handleChange}
                required
              />
            </div>

            {/**-- Order Type -- */}
            <div className="space-y-2 lg:space-y-3 w-[35%]">
              <label htmlFor="priority">Order Type</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Low">New Order</option>
                <option value="Medium">Revision</option>
                <option value="High">Support</option>
              </select>
            </div>

            {/**-- Order Priority -- */}
            <div className="space-y-2 lg:space-y-3 w-[15%]">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="Low">1</option>
                <option value="Medium">2</option>
                <option value="High">3</option>
              </select>
            </div>
          </div>
          {/**-- input group -- */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/**-- Delivery File -- */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Delivery File</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            {/**-- Team Member -- */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Team Member</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">1. Imran Hossain</option>
                <option value="Medium">2. Mehedi Hasan</option>
                <option value="High">3. Ferdousi Akter</option>
              </select>
            </div>
          </div>
        </div>
        {/**-- inputs ends -- */}
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            className="rounded bg-red-500! px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="submit"
            className="rounded bg-green-500! px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => onSave(task)}
          >
            {isNew ? "Save Task" : "Update Task"}
          </button>
        </div>
      </htmlForm>
    </>
  );
};

export default AddTaskModal;
