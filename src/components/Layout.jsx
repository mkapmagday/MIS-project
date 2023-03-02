import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";

export default function Layout(){
    return (
        <div>
            <NavigationBar />
            <Outlet></Outlet>
        </div>
    )
}