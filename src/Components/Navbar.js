import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../Components/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://tuwebonline.co/wp-content/uploads/2020/05/logoepayco.png"
        alt="epayco"></img>{" "}
      <br></br>
      <p className="user"> ALEXANDER CEBA...</p>
      <p>
        <FaHome /> Dashboard
      </p>{" "}
      <br></br>
      <p>
        <FaUser /> Clientes
      </p>
    </div>
  );
}
