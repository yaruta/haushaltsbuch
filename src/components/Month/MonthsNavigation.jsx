import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MonthsNavigation.module.css";

const DUMMY_MONTHS = [
  { id: "m1", value: "Jan" },
  { id: "m2", value: "Feb" },
  { id: "m3", value: "Mär" },
  { id: "m4", value: "Apr" },
  { id: "m5", value: "Mai" },
  { id: "m6", value: "Jun" },
  { id: "m7", value: "Jul" },
  { id: "m8", value: "Aug" },
  { id: "m9", value: "Sep" },
  { id: "m10", value: "Okt" },
  { id: "m11", value: "Nov" },
  { id: "m12", value: "Dez" },
];

/**
 * This is a component for navigation between different months and years in the household book.
 */

const MonthsNavigation = (props) => {
  const [yearIsShown, setYearIsShown] = useState("2024");
  const [monthIsShown, setMonthIsShown] = useState(new Date().getMonth() + 1);
  const id = `${yearIsShown}-${monthIsShown}`;

  useEffect(() => {
    props.onActive(id);
  }, [yearIsShown, monthIsShown]);

  const yearIsShownChangeHandler = (event) => {
    setYearIsShown(event.target.value);
  };

  const monthIsShownChangeHandler = (event) => {
    setMonthIsShown(event.target.id.replace("m", ""));
  };

  return (
    <nav className={classes.navigationBar}>
      <ul>
        {DUMMY_MONTHS.map((month) => {
          return (
            <li key={month.id}>
              <NavLink
                to={`/list/${month.value}`}
                id={month.id}
                onClick={monthIsShownChangeHandler}
                className={({isActive}) => (isActive ? classes.active : undefined)}
              >
                {month.value}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <select defaultValue="2024" onChange={yearIsShownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </nav>
  );
};

export default MonthsNavigation;
