<<<<<<< HEAD
import NavItems from "./NavItems";
=======
import NavItems from "./NavItems.jsx";
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c
import logo from "../assets/logo.png";

const MENU = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Transfer",
    link: "/transfer",
  },
  {
    title: "Topup",
    link: "/topup",
  },
  {
    title: "Sign Out",
    link: "/",
  },
];

function Navbar() {
  return (
    <nav className="flex mx-auto w-screen justify-between items-center px-8 py-6 bg-white">
      <img src={logo} alt="walled logo" />
      <NavItems menu={MENU} />
    </nav>
  );
}

export default Navbar;
