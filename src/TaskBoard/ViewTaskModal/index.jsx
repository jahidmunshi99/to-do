const viewTaskModal = () => {
  return (
    <>
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-6 text-center">
          Client Orders Overview
        </h1>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-gray-700 border border-gray-200 rounded-lg">
            <thead class="bg-gray-500">
              <tr>
                <th class="px-4 py-2 text-left text-sm font-semibold">Sl</th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Service Type
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Order Status
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Deliverd File
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Platform
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Budget ($)
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Delivery Date
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Task By
                </th>
                <th class="px-4 py-2 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {/* <!-- Current Client Row --> */}
              <tr class="bg-cyan-800 hover:bg-cyan-600">
                <td class="px-4 py-2">01</td>
                <td class="px-4 py-2">Book Formatting</td>
                <td class="px-4 py-2">Completed</td>
                <td class="px-4 py-2">
                  Paperback, Kindle, epub, Cover formatting
                </td>
                <td class="px-4 py-2">Fiverr</td>
                <td class="px-4 py-2">$500</td>
                <td class="px-4 py-2">12-12-2025</td>
                <td class="px-4 py-2">Nayem</td>
                <td class="px-4 py-2">
                  <button
                    onclick="toggleHistory('history-01')"
                    class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    View History
                  </button>
                </td>
              </tr>

              {/* <!-- Previous Records (Collapsed by default) --> */}
              <tr id="history-01" class="hidden bg-gray-50">
                <td colspan="10" class="px-4 py-2">
                  <div class="space-y-2">
                    <div class="p-2 bg-gray-100 rounded shadow-sm">
                      <p class="text-sm">
                        <strong>Previous Task 1:</strong> Book formatting for
                        Amazon KDP
                      </p>
                      <p class="text-sm">
                        <strong>Platform:</strong> Fiverr
                      </p>
                      <p class="text-sm">
                        <strong>Budget:</strong> $100
                      </p>
                      <p class="text-sm">
                        <strong>Delivery Date:</strong> 10-12-2025
                      </p>
                    </div>
                    <div class="p-2 bg-gray-100 rounded shadow-sm">
                      <p class="text-sm">
                        <strong>Previous Task 2:</strong> Kindle formatting
                      </p>
                      <p class="text-sm">
                        <strong>Platform:</strong> Fiverr
                      </p>
                      <p class="text-sm">
                        <strong>Budget:</strong> $150
                      </p>
                      <p class="text-sm">
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
    </>
  );
};

export default viewTaskModal;
