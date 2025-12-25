import { useState } from "react";
const AddTaskModal = ({ onSave, taskToUpdate, onClose }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      clientId: "",
      client_name: "",
      client_email: "",
      country: "",
      orderStatus: "",
      platform: [],
      service_type: [],
      client_category: "",
      total_orders: "",
      budget: "",
      note: [],
      delivery_date: "",
      delivery_file: "",
      handle_by: [],
      isfevorite: true,
      createdBy: "",
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
      <div className="fixed inset-0 z-20 flex items-start justify-center bg-gray-500/80 overflow-y-auto">
        <htmlFor className="relative mx-auto my-6 w-full max-w-[560px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-6 md:p-9 lg:my-20 lg:p-11">
          <h2 className="mb-6 text-center text-xl font-bold text-white md:text-2xl lg:mb-11 lg:text-[28px]">
            {isNew ? "Add New Task" : "Edit Task"}
          </h2>

          {/* inputs */}
          <div className="space-y-6 text-white lg:space-y-10">
            {/* Row 1 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Customer ID</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>

              <div className="w-full space-y-2">
                <label>Client's Name</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Email</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>

              <div className="w-full space-y-2">
                <label>Country</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Platform</label>
                <select className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>

              <div className="space-y-2">
                <label>Service Type</label>
                <select className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>

              <div className="space-y-2">
                <label>Total Order</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Budget</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>

              <div className="space-y-2">
                <label>Order Status</label>
                <select className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>

              <div className="space-y-2">
                <label>Client Status</label>
                <select className="w-full rounded-md bg-[#2D323F] px-3 py-2.5" />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Delivery File</label>
                <input className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>

              <div className="space-y-2">
                <label>Delivery Date</label>
                <input
                  type="date"
                  className="w-full rounded-md bg-[#2D323F] px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <label>Team Member</label>
                <select className="w-full rounded-md bg-[#2D323F] px-3 py-2" />
              </div>
            </div>

            {/* Note */}
            <div className="space-y-2">
              <label>Note</label>
              <textarea className="min-h-[80px] w-full rounded-md bg-[#2D323F] px-3 py-2" />
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
                onSave(task);
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
