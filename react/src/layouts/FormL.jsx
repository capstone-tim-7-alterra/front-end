import Navbar from "../components/navbarAdmin/NavbarAdmin"
import { Outlet } from "react-router-dom";

export default function FormL() {
  return (
    <div className="bg-primary-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
