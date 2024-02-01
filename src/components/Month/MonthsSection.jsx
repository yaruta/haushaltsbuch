import React, { useState } from "react";
import MonthsNavigation from "./MonthsNavigation";
import Month from "./Month";
import Balance from "../Balance/Balance";
import AddInputButton from "../Input/AddInputButton";
import classes from "./MonthSection.module.css";

/**
 * This is the component that collects all the components for the month. And where is set which month is shown now. 
 * By default we see a current month. 
 */

const MonthsSection = () => {
  const date = new Date();
  const [monthIsActive, setMonthIsActive] = useState(
    `${date.getFullYear()}-${date.getMonth() + 1}`
  );

  /**
   * A method where we get the id for the selected month, if selected by the user.
   */
  const activeMonthHandler = (id) => {
    setMonthIsActive(id);
  };

  return (
    <section>
      <article className={classes.contentSection}>
        <MonthsNavigation onActive={activeMonthHandler} />
        <AddInputButton />
      </article>
      <article className={classes.contentSection}>
        <Month id={monthIsActive} />
        <Balance />
      </article>
    </section>
  );
};

export default MonthsSection;
