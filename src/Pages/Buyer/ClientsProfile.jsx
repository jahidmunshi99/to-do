import Sidebar from "./Sidebar";
import TaskTable from "./TaskTable";

const ClientsProfile = () => {
  return (
    <>
      <section className="py-35" id="tasks">
        <div className="container">
          {/**-- Search Box Ends --*/}
          <div className=" bg-[#1D212B]w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 overflow-hidden">
            <Sidebar />
            <TaskTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsProfile;
