import { IoShareSocial } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const viewTaskModal = () => {
  return (
    <>
      <div className="mx-auto py-10 min-h-screen bg-gray-800">
        <div className="container ">
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
              <p className="text-gray-600 my-4 text-sm flex mx-auto items-center gap-2">
                <MdOutlineMarkEmailUnread />
                <span>support@gmail.com</span>
              </p>
              <p className="text-gray-600 text-sm my-4 flex mx-auto items-center gap-2">
                <IoShareSocial />
                <span>Columbia University - New York</span>
              </p>

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
          {/** ----------------------------- Break ---------------------------------- */}

          <div className="mt-5">
            <h1 className="text-2xl font-bold mb-8 text-center">
              Order Summary
            </h1>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 border border-gray-200 rounded-lg">
                <thead className="bg-gray-500">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Sl
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Service Type
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Book Title
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Author
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Deliverd File
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Platform
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Budget ($)
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Order Status
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Task By
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">
                      Delivered
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* <!-- Current Client Row --> */}
                  <tr className="bg-cyan-800 hover:bg-cyan-600">
                    <td className="px-4 py-2">01</td>
                    <td className="px-4 py-2">Book Formatting</td>
                    <td className="px-4 py-2">Lorem Ipsum</td>
                    <td className="px-4 py-2">Jahid Munshi</td>
                    <td className="px-4 py-2">Paperback, Kindle, epub</td>
                    <td className="px-4 py-2">Fiverr</td>
                    <td className="px-4 py-2">$500</td>
                    <td className="px-4 py-2">Completed</td>
                    <td className="px-4 py-2">Nayem</td>
                    <td className="px-4 py-2">12-12-2025</td>
                  </tr>

                  {/* <!-- Previous Records (Collapsed by default) --> */}
                  <tr id="history-01" className="hidden bg-gray-50">
                    <td colspan="10" className="px-4 py-2">
                      <div className="space-y-2">
                        <div className="p-2 bg-gray-100 rounded shadow-sm">
                          <p className="text-sm">
                            <strong>Previous Task 1:</strong> Book formatting
                            for Amazon KDP
                          </p>
                          <p className="text-sm">
                            <strong>Platform:</strong> Fiverr
                          </p>
                          <p className="text-sm">
                            <strong>Budget:</strong> $100
                          </p>
                          <p className="text-sm">
                            <strong>Delivery Date:</strong> 10-12-2025
                          </p>
                        </div>
                        <div className="p-2 bg-gray-100 rounded shadow-sm">
                          <p className="text-sm">
                            <strong>Previous Task 2:</strong> Kindle formatting
                          </p>
                          <p className="text-sm">
                            <strong>Platform:</strong> Fiverr
                          </p>
                          <p className="text-sm">
                            <strong>Budget:</strong> $150
                          </p>
                          <p className="text-sm">
                            <strong>Delivery Date:</strong> 08-12-2025
                          </p>
                        </div>
                        {/* <!-- Add more previous tasks dynamically --> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default viewTaskModal;
