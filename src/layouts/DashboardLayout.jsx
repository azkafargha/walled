import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = localStorage.getItem("login");
    if (!storedLogin) {
      navigate("login");
    }
  }, []);

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}

export default DashboardLayout;