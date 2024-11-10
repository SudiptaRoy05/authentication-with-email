import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
