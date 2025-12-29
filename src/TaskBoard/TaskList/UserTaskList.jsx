import { FaEye } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
const UserTaskList = () => {
  return (
    <>
      <div className="bg-gray-800 p-4">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* <!-- Profile Card --> */}
          <div className="bg-white text-black mt-6 p-6 rounded-lg shadow h-[300px] flex flex-col justify-between md:order-1 sm:order-2">
            <div className="flex flex-col items-center text-center">
              <IoMdContact className="text-6xl text-gray-500" />
              <h2 className="font-bold text-lg">Imran Hossain</h2>
              <p className="text-gray-500 text-sm mb-4">Team Leader</p>
            </div>

            <div className="mt-6 text-center mx-auto overflow-y-auto">
              <h3 className="font-semibold mb-2">Level overview</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="text-center">
                  <span className="font-semibold">eMail:</span>{" "}
                  imranhossain@gmail.com
                </li>
                <li>
                  <span className="font-semibold">Success score:</span> 9
                </li>
                <li>
                  <span className="font-semibold">Rating:</span> ★ 4.8
                </li>
                <li>
                  <span className="font-semibold">Response rate:</span> 100%
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Active Orders --> */}
          <div className="md:col-span-3 bg-transparent text-black p-6 rounded-lg md:order-2 sm:order-1 shadow">
            <div className="flex justify-between items-center mb-4 bg-white text-black p-4 border-0 rounded">
              <h2 className="font-bold text-lg">Active orders - (7)</h2>
              <select className="border rounded px-2 py-1">
                <option>Active orders (7)</option>
                <option>In Revision (5)</option>
                <option>Delivered (15)</option>
              </select>
            </div>

            <div className="space-y-4">
              {/* <!-- Order Item --> */}
              <div className="flex md:items-center justify-between bg-gray-50 p-4 rounded">
                <div className="flex items-center gap-3">
                  <IoMdContact className="text-6xl text-gray-500" />
                  <div>
                    <p className="font-semibold">
                      <span>ID: </span>764
                    </p>
                    <p className="text-gray-500 text-sm">
                      <span className="font-semibold text-black">Type: </span>
                      Paperback, Kindle
                    </p>
                    <p className="text-red-500 text-sm">
                      <span className="font-semibold text-black">
                        Delivery :
                      </span>{" "}
                      12/12/2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                    IN REVISION
                  </span>
                  <a href="#" className="text-green-600 font-semibold text-sm">
                    <FaEye className="text-xl hover:text-blue-500" />
                  </a>
                </div>
              </div>

              <div className="flex md:items-center justify-between bg-gray-50 p-4 rounded">
                <div className="flex items-center gap-3">
                  <IoMdContact className="text-6xl text-gray-500" />
                  <div>
                    <p className="font-semibold">
                      <span>ID: </span>764
                    </p>
                    <p className="text-gray-500 text-sm">
                      <span className="font-semibold text-black">Type: </span>
                      Paperback, Kindle
                    </p>
                    <p className="text-red-500 text-sm">
                      <span className="font-semibold text-black">
                        Delivery :
                      </span>{" "}
                      12/12/2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                    IN REVISION
                  </span>
                  <a href="#" className="text-green-600 font-semibold text-sm">
                    <FaEye className="text-xl hover:text-blue-500" />
                  </a>
                </div>
              </div>
              <div className="flex md:items-center justify-between bg-gray-50 p-4 rounded">
                <div className="flex items-center gap-3">
                  <IoMdContact className="text-6xl text-gray-500" />
                  <div>
                    <p className="font-semibold">
                      <span>ID: </span>764
                    </p>
                    <p className="text-gray-500 text-sm">Price: $60</p>
                    <p className="text-gray-600 text-sm">Due in 2d, 4h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    IN PROGRESS
                  </span>
                  <a href="#" className="text-green-600 font-semibold text-sm">
                    <FaEye className="text-xl hover:text-blue-500" />
                  </a>
                </div>
              </div>
              <div className="flex md:items-center justify-between bg-gray-50 p-4 rounded">
                <div className="flex items-center gap-3">
                  <IoMdContact className="text-6xl text-gray-500" />
                  <div>
                    <p className="font-semibold">
                      <span>ID: </span>764
                    </p>
                    <p className="text-gray-500 text-sm">Price: $60</p>
                    <p className="text-gray-600 text-sm">Due in 2d, 4h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    IN PROGRESS
                  </span>
                  <button className="text-green-600 font-semibold text-sm ">
                    <FaEye className="text-xl hover:text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTaskList;
