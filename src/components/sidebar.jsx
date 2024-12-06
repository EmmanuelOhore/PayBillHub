import { useState } from "react";
import "boxicons";
import logo from "../assets/logo.png";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const Links = [
    {
      href: "/",
      name: "Dashboard",
      icon: " fa-house",
    },
    {
      href: "/profile",
      name: "Profile",
      icon: "fa-user",
    },
    {
      href: "/invoice",
      name: "Invoices",
      icon: "fa-file-lines",
    },
    {
      href: "#reports",
      name: "Way Bills",
      icon: "fa-truck-fast",
    },
    {
      href: "#industries",
      name: "Payment Orders",
      icon: "fa-file-invoice-dollar",
    },
    {
      href: "#settings",
      name: "History",
      icon: " fa-clock-rotate-left",
    },
  ];
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleToggleSidebar = () => {
    document.body.classList.toggle("collapsed");
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <a href="#" className="logo__wrapper">
            <img src={logo} alt="Logo" className="logo-small" />
            <span className="hide company-name">HydroCarbon</span>
          </a>
        </div>
        <button
          onClick={handleToggleSidebar}
          className="expand-btn"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="exp-btn"
            role="img"
          >
            <title id="exp-btn">Expand/Collapse Menu</title>
            <path
              d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* sidebar-Links */}
      <div className="sidebar-links">
        <ul>
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                title={link.name}
                className={`tooltip ${
                  activeLink === link.name ? "active" : ""
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                <i className={`fa-solid ${link.icon}`}></i>

                <span className="link hide">{link.name}</span>
                <span className="tooltip__content">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__profile">
        <div className="avatar__wrapper">
          <img
            className="avatar"
            src="https://via.placeholder.com/50"
            alt="Joe Doe Picture"
          />
          <div className="online__status"></div>
        </div>
        <div className="avatar__name hide">
          <div className="user-name">Joe Doe</div>
          <div className="email">joe.doe@atheros.ai</div>
        </div>
        <a href="#logout" className="logout hide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-labelledby="logout-icon"
            role="img"
          >
            <title id="logout-icon">log out</title>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
