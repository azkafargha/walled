import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import Table from "./Table.jsx";
import { useTheme } from "../hooks/useTheme";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const [users, setUsers] = useState([]);
  const { theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";

  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  const userName = users[0]?.name || "User";
  const userBalance = users[0]?.balance || 0;

  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            {`Good Morning, ${userName}`}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        {users.length > 0 && <Avatar name={userName} />}
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div
          className="p-12 rounded-2xl w-1/5 text-white"
          style={{ backgroundColor: themeColor }}
        >
          <p>Account No.</p>
          <p className="mt-3 font-bold">100899</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold">
              {showBalance ? `Rp${userBalance.toLocaleString()}` : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
      <br />
      <Table />
    </section>
  );
}

export default Hero;
