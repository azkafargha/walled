import { useState, useEffect } from "react";

function Transfer() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get the logged-in user's name from localStorage
    const loggedInUser = localStorage.getItem("login");

    if (!loggedInUser) {
      setError("User not logged in.");
      setIsLoading(false);
      return;
    }

    // Fetch the user's balance from db.json
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.users.find((user) => user.name === loggedInUser);
        if (user) {
          setBalance(user.balance);
        } else {
          setError("User not found.");
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching data.");
        setIsLoading(false);
      });
  }, []);

  const handleTransfer = () => {
    if (amount <= 0 || amount > balance) {
      setError("Insufficient balance or invalid amount.");
      return;
    }

    // Update balance after transfer
    const updatedBalance = balance - amount;

    // Create a new transaction entry
    const newTransaction = {
      id: Date.now().toString(),
      dateTime: new Date().toISOString(),
      type: "DEBIT",
      fromTo: "Recipient", // Replace with actual recipient info
      description: notes || "Transfer",
      amount: -amount,
    };

    // Update user balance in db.json
    fetch("http://localhost:3000/users/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ balance: updatedBalance }),
    })
      .then((response) => response.json())
      .then(() => {
        // Update transactions in db.json
        return fetch("http://localhost:3000/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTransaction),
        });
      })
      .then(() => {
        // Update state with the new balance
        setBalance(updatedBalance);
        setAmount("");
        setNotes("");
        setError("");
      })
      .catch(() => setError("Error processing the transfer."));
  };

  return (
    <section className="flex flex-col justify-center items-center mt-12">
      <div className="text-black font-bold text-xl">Transfer</div>
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <div className="rounded-6xl w-[350px] h-[450px]">
          <div className="m-5 rounded-xl bg-[#FAFBFD] h-[39px] shadow-lg">
            <div className="flex align-left items-center justify-center rounded-xl bg-[#efefef] w-[60px] h-[39px]">
              <p className="text-black">To</p>
            </div>
          </div>
          {isLoading ? (
            <div className="m-5">Loading balance...</div>
          ) : (
            <>
              <div className="m-5">
                <label className="text-black block mb-2 text-sm font-medium">
                  Balance: IDR {balance.toLocaleString("id-ID")}
                </label>
              </div>
              <form className="max-w-sm mx-auto">
                <div className="m-5">
                  <label className="text-black block mb-2 text-sm font-medium">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full p-4 shadow-lg rounded-lg bg-white text-black"
                  />
                </div>
                <div className="m-5">
                  <label className="text-black block mb-2 text-sm font-medium">
                    Notes
                  </label>
                  <input
                    type="text"
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="block w-full h-[90px] p-4 shadow-lg rounded-lg bg-white text-black"
                  />
                </div>
              </form>
              {error && (
                <div className="flex items-center flex-col m-5 text-red-500 text-sm">
                  {error}
                </div>
              )}
              <button
                onClick={handleTransfer}
                className="flex items-center justify-center m-5 block w-[300px] p-4 shadow-lg rounded-lg bg-green text-white"
              >
                Transfer
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Transfer;
