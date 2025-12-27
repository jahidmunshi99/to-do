const Info = ({ label, value, multiline = false }) => (
  <div>
    <p className="mb-1 text-xs font-semibold text-gray-400">{label}</p>
    <div
      className={`rounded-md bg-[#2D323F] px-3 py-2 ${
        multiline ? "min-h-[80px]" : ""
      }`}
    >
      {value || "—"}
    </div>
  </div>
);

const ViewTaskModal = ({ task, onClose }) => {
  console.log(task);
  if (!task) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-700/90 z-40"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto sm:items-center pt-5">
        {/* Modal */}
        <div className="mt-10 sm:mt-0 w-full max-w-[760px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-6 sm:p-9">
          <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
            Project Details
          </h2>

          {/* Content */}
          <div className="space-y-4 text-sm sm:space-y-6 mt-6">
            {task.map((item) => {
              return (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Info label="Client Number" value={item.clientId} />
                    <Info label="Client Name" value={item.client_name} />
                  </div>
                  <Info label="Job Title" value={item.project_title} />
                  <Info label="Message" value={item.details} multiline />
                  {/* Budget & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Info label="Budget" value={item.budget} />
                    <Info label="Delivery Date" value={item.delivery_date} />
                    <Info
                      label="Order Status"
                      value={item.orderStatus ? "Pending" : "Delivered"}
                    />
                  </div>
                  {/* Order Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Info label="Order Type" value={item.orderType} />
                    <Info label="Team Member" value={item.author} />
                    <Info label="Priority" value={item.priority} />
                  </div>
                  <Info label="Delivery File" value={item.tags} />
                </>
              );
            })}
          </div>

          {/* Close Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="rounded bg-red-500 px-6 py-2 text-white font-semibold hover:opacity-80 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTaskModal;
