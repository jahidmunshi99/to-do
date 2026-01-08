import { useState } from "react";

const AddTaskModal = ({ onSave, taskToUpdate, onClose }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      client_id: "",
      client_name: "",
      book_title: "",
      author_name: "",
      client_email: "",
      client_social_link: "",
      country: "",
      order_status: "",
      platform: "",
      service_type: "",
      budget: "",
      note: [],
      delivery_date: "",
      delivery_file: [],
      is_order_complete: false,
      handle_by: "",
      createdBy: "",
      createdAt: new Date().toISOString(),
    }
  );

  const isNew = !taskToUpdate;

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "delivery_file") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  }
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-start justify-center bg-gray-500/80 overflow-y-auto">
        <htmlFor className="relative mx-auto my-6 w-full max-w-[700px] border- rounded-xl border border-[#FEFBFB]/[46%] bg-[#191D26] p-6 md:p-9 lg:my-20 lg:p-11">
          <h2 className="mb-6 text-center text-xl font-bold text-white md:text-2xl lg:mb-11 lg:text-[28px]">
            {isNew ? "Add New Task" : "Edit Task"}
          </h2>

          {/* inputs */}
          <div className="space-y-6 text-white lg:space-y-10">
            {/* Row 1 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="lg:w-[20%] md:w-full space-y-2">
                <label>Customer ID</label>
                <input
                  type="text"
                  name="client_id"
                  onChange={handleChange}
                  value={task.client_id}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>

              <div className="lg:w-[50%] md:w-full space-y-2">
                <label>Client's Name</label>
                <input
                  type="text"
                  name="client_name"
                  onChange={handleChange}
                  value={task.client_name}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>
              <div className="lg:w-[30%] md:w-full space-y-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={task.country}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Platform</label>
                <select
                  name="platform"
                  value={task.platform}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                >
                  <option value="fiverr">Fiverr</option>
                  <option value="upwork">Upwork</option>
                  <option value="direct">Direct</option>
                </select>
              </div>

              <div className="space-y-2">
                <label>Service Type</label>
                <select
                  name="service_type"
                  value={task.service_type}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                >
                  <option value="book formatting">Book Formatting</option>
                  <option value="cover design">Cover Design</option>
                  <option value="web development">Web Development</option>
                </select>
              </div>
              <div className="space-y-2">
                <label>Budget</label>
                <input
                  name="budget"
                  onChange={handleChange}
                  value={task.budget}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Order Status</label>
                <select
                  name="order_status"
                  value={task.order_status}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                >
                  <option value="new">Active</option>
                  <option value="revision">Revision</option>
                  <option value="delivered">Delivered</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="space-y-2">
                <label>Delivery Date</label>
                <input
                  type="date"
                  name="delivery_date"
                  onChange={handleChange}
                  value={task.delivery_date}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label>Handle By</label>
                <select
                  name="handle_by"
                  value={task.handle_by}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                >
                  <option value="nayem">Nayem</option>
                  <option value="jahid munshi">Jahid Munshi</option>
                  <option value="faiaz ">Faiaz</option>
                </select>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <label>Delivery File</label>
                <textarea
                  name="delivery_file"
                  onChange={handleChange}
                  value={task.delivery_file}
                  className="w-full rounded-md bg-[#2D323F] max-h-[40px] px-3 "
                />
              </div>
            </div>

            {/** Book Information */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Book Title</label>
                <input
                  type="text"
                  name="book_title"
                  onChange={handleChange}
                  value={task.book_title}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>

              <div className="w-full space-y-2">
                <label>Author Name</label>
                <input
                  type="text"
                  name="author_name"
                  onChange={handleChange}
                  value={task.author_name}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  name="client_email"
                  onChange={handleChange}
                  value={task.client_email}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>

              <div className="w-full space-y-2">
                <label>Social Link</label>
                <input
                  type="text"
                  name="client_social_link"
                  onChange={handleChange}
                  value={task.client_social_link}
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>
            </div>

            {/* Note */}
            <div className="space-y-2">
              <label>Note</label>
              <textarea
                name="note"
                value={task.note}
                onChange={handleChange}
                className="min-h-[80px] w-full rounded-md bg-[#2D323F] px-3 py-2"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col-reverse gap-4 md:flex-row md:justify-between">
            <button
              className="rounded bg-red-500 px-4 py-2 text-white hover:opacity-80"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:opacity-80"
              onClick={() => {
                onSave(task, isNew);
              }}
            >
              {isNew ? "Save Task" : "Update Task"}
            </button>
          </div>
        </htmlFor>
      </div>
    </>
  );
};

export default AddTaskModal;
