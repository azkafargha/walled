import Navbar from "../src/components/Navbar.jsx"
import { Outlet } from "react-router"

function DashboardLayout() {
    return <>
    <Navbar/>
    <Outlet/>
    </> 
    
}

export default DashboardLayout