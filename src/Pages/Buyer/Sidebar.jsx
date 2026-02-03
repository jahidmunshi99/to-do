import { IoShareSocial } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-2 md:px-1 md:py-4">
          <div className="relative mx-auto w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
            {/* <!-- Header background --> */}
            <div className="h-15 bg-gradient-to-r from-pink-400 to-pink-300 relative">
              <div className="absolute top-5 left-[38%]   ">
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  alt="Profile"
                  class="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* <!-- Content --> */}
            <div className="pt-16 text-center px-6 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 my-2">
                Samantha Jones
              </h2>
              <p className="text-gray-500 text-sm">New York, United States</p>
              <div className="text-gray-600 my-2 text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <MdOutlineMarkEmailUnread />
                  <span>support@gmail.com</span>
                </div>
              </div>

              <div className="text-gray-600 text-sm mt-2 mb-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <IoShareSocial />
                  <span>Columbia University - New York</span>
                </div>
              </div>
              <hr />

              {/* <!-- Stats --> */}
              <div className="flex justify-around mt-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">65</p>
                  <p className="text-gray-500 text-sm">Completed Order</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">$ 43</p>
                  <p className="text-gray-500 text-sm">Revinue</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">21</p>
                  <p className="text-gray-500 text-sm">Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
