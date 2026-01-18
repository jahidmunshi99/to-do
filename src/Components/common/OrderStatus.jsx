const OrderStatus = ({ items }) => {
  const newOrder = items?.filter((e) => e.order_status === "new");
  const revision = items?.filter((e) => e.order_status === "revision");
  const awaiting = items?.filter(
    (e) => e.order_status === "awaiting_to_review"
  );

  console.log(items);
  return (
    <div className="flex justify-between items-center mb-4 bg-white text-black p-4 border-0 rounded">
      <h2 className="font-bold text-lg">Active orders - ({items?.length})</h2>
      <select className="border rounded px-2 py-1">
        <option>New orders ({newOrder?.length})</option>
        <option>In Revision ({revision?.length})</option>
        <option>Awaiting ({awaiting?.length})</option>
      </select>
    </div>
  );
};

export default OrderStatus;
