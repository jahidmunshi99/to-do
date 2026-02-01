import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TaskTable = () => {
  return (
    <div className="md:col-span-3 order-1 md:order-2 rounded border border-[rgba(206,206,206,0.12)] p-2">
      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse bg-gray-900 text-white rounded overflow-x-auto">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">Sl</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Delivered File
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Budget ($)
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Order Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Task By
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Delivered
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-2 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-3 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-4 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">04</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* Task-5 */}
            <tr className="hover:bg-gray-700 transition">
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Book Formatting</td>
              <td className="px-4 py-2">Paperback, Kindle, ePub</td>
              <td className="px-4 py-2">$500</td>
              <td className="px-4 py-2">Completed</td>
              <td className="px-4 py-2">Nayem</td>
              <td className="px-4 py-2">12-12-2025</td>
              <td className="px-4 py-2 flex gap-3">
                <button className="text-blue-400 hover:text-blue-600">
                  <FaEdit className="text-xl text-blue-600 hover:text-black" />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <MdDelete className="text-xl text-red-600 hover:text-red-700" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
