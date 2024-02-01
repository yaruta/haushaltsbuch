import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import classes from "./Header.module.css";

/**
 * This is a component for a header.
 */
const Header = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate("/");
  };
  
  return (
    <header className={classes.header}>
      <div className={classes.logoSection} onClick={navigateToMainPage}>
        <h1>Haushaltsbuch</h1>
      </div>
      <div className={classes.navigationSection}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Neue Eintrag
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list/:monthId"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Monatslisten
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Statistik
            </NavLink>
          </li>
        </ul>

        <div className={classes.userInfo}>
          <p>Login in development...</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
