import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="w-10/12 mx-auto min-h-screen flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
}
