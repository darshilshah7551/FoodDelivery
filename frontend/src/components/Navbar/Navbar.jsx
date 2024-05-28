import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.SkipTheDishes_logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            onClick={() => setMenu("home")}
            activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            onClick={() => setMenu("menu")}
            activeclassname="active">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/appdownload"
            onClick={() => setMenu("mob-app")}
            activeclassname="active">
            Mobile App
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setMenu("contact")}
            activeclassname="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" /> Orders
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
