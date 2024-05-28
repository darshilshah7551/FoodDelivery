import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";
import { useLocation, useNavigate } from "react-router-dom";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, url } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleCategoryClick = (menu_name) => {
    setCategory(category === menu_name ? "All" : menu_name);
    if (!isHomePage) {
      navigate({
        pathname: "/",
        search: `?category=${menu_name}`,
      });
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div
        className={`explore-menu-list-container ${
          isHomePage ? "scrollable" : "grid"
        }`}>
        {isHomePage && (
          <button className="view-all-button" onClick={() => navigate("/menu")}>
            View All
          </button>
        )}
        <div
          className={`explore-menu-list ${isHomePage ? "scrollable" : "grid"}`}>
          {menu_list.map((item, index) => (
            <div
              onClick={() => handleCategoryClick(item.menu_name)}
              key={index}
              className="explore-menu-list-item">
              <img
                src={`${url}/images/${item.menu_image}`}
                className={category === item.menu_name ? "active" : ""}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
