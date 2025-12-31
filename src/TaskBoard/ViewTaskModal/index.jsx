import { IoShareSocial } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const viewTaskModal = () => {
  return (
    <>
      <section
        className="fixed inset-0 z-20 flex items-start justify-center bg-gray-500/80 overflow-y-auto mt-20"
        id="tasks"
      >
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-5 md:px-9 md:py-16">
            <div>
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
                  <p className="text-gray-500 text-sm">
                    New York, United States
                  </p>
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
                      <p className="text-lg font-semibold text-gray-800">
                        $ 43
                      </p>
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

              <div className="mt-8 ">
                <div className="overflow-x-auto">
                  <div className="my-6 ">
                    <h1 className="text-2xl font-bold text-center my-8">
                      Order Summary
                    </h1>
                  </div>
                  <table className="min-w-full bg-gray-900 py-6 text-white rounded border ">
                    <thead>
                      <tr>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Sl
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Service Type
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Book Title
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Author
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Deliverd File
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Platform
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Budget ($)
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Order Status
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Task By
                        </th>
                        <th className="px-4 py-4 text-left text-sm font-semibold">
                          Delivered
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {/* <!-- Current Client Row --> */}
                      <tr className="bg-gray-600 hover:bg-gray-700 border-t-black">
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
                                <strong>Previous Task 1:</strong> Book
                                formatting for Amazon KDP
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
                                <strong>Previous Task 2:</strong> Kindle
                                formatting
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
        </div>
      </section>
    </>
  );
};

export default viewTaskModal;
