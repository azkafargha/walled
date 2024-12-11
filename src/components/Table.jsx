import { useEffect, useState } from "react";

function Table() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      const url = "http://localhost:3000/transactions"; // Ganti dengan endpoint API transaksi Anda
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTransactions();
  }, []);

  return (
    <div className="overflow-x-auto w-full mt-6">
  {isLoading ? (
    <p>Loading transactions...</p>
  ) : (
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Date & Time</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">From / To</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Description</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                {transaction.dateTime}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                {transaction.type}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                {transaction.fromTo}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-800">
                {transaction.description}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 font-bold ${
                  transaction.type === "CREDIT" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.amount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-4 text-gray-800">
              No transactions found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )}
</div>


  );
}

export default Table;
