import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
        backgroundColor: "#11103E",
        width: "100%",
        height: 100,
        padding: "0 20px",
        position: "relative",
      }}
    >
      {/* Logo Section */}
      <div style={{ fontWeight: 400 }}>
        <a href="/" style={{ fontSize: "1.5em", color: "white" }}>
          Videoanalytics.usln.in
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div style={{ backgroundColor: "white", height: "5px", width: "30px", marginBottom: "5px" }}></div>
        <div style={{ backgroundColor: "white", height: "5px", width: "30px", marginBottom: "5px" }}></div>
        <div style={{ backgroundColor: "white", height: "5px", width: "30px" }}></div>
      </div>

      {/* Menu Items */}
      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="#services" className="menu-item">
            Services
          </Link>
        </li>
        <li>
          <Link to="/ImageFormatter" className="menu-item">
            Image Formatter
          </Link>
        </li>
        <li>
          <Link to="/VideoFormatter" className="menu-item">
            Video Formatter
          </Link>
        </li>
        <li>
          <Link to="/VideoToTxtConverter" className="menu-item">
            Video to Txt.
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

