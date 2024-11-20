import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Hydrocarbon</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/invoice">Invoices</Link>
        </li>
        <li>
          <a href="#">Way Bills</a>
        </li>
        <li>
          <a href="#">Payment Orders</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
