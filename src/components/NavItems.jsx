import { useState } from "react";
<<<<<<< HEAD
=======
import { NavLink } from "react-router";
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c

function NavItems({ menu }) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <ul className="flex gap-x-8 text-black">
      {menu.map((item) => {
        return (
<<<<<<< HEAD
          <a
            key={item.title}
            href={item.link}
            className={`${
              activeTab === item.title
                ? "text-[#19918F] font-bold"
                : "text-black"
            }`}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </a>
=======
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) =>
              isActive ?  "text-[#19918F] font-bold" : "text-black"
            }
          >
            {item.title}
          </NavLink>
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c
        );
      })}
    </ul>
  );
}

export default NavItems;
