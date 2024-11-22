// import { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
const SideBar = () => {
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {
  //   setToggle((pre) => !pre);
  // };
  return (
    <aside className="sidebar">
      {/* <div onClick={handleToggle} className="expand-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </div> */}
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Hydrocarbon</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <Link to="/" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-file-lines"></i>
          </span>
          <Link to="/invoice">Invoices</Link>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-truck-fast"></i>
          </span>
          <a href="#">Way Bills</a>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-file-invoice-dollar"></i>
          </span>
          <a href="#">Payment Orders</a>
        </li>

        <li>
          <span>
            <i className="fa-solid fa-clock-rotate-left"></i>
          </span>
          <a href="#">History</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
