import React, { useContext } from "react";
import InputItem from "../Input/InputItem";
import classes from "./Month.module.css";
import StoreContext from "../../store/store-context";

/**
 * This is a component for displaying all of the items in the month and balance of the month.
 */

const Month = (props) => {
  const storeCtx = useContext(StoreContext);

  const storeItems = (
    <ul>
      {storeCtx.months.map((month) => {
        if (month.id === props.id) {
          return (
            <div key={month.id}>
              {month.items.map((item) => {
                return (
                  <InputItem
                    key={item.id}
                    id={item.id}
                    monthId = {month.id}
                    title={item.title}
                    type={item.type}
                    amount={item.amount}
                    date={item.date}
                  />
                );
              })}
              <div className={`${classes.monthBalance} ${month.monthBalance >= 0 ? classes.revenue : classes.expenses}`}><span>Bilanz des Monats:</span><span >{`${(month.monthBalance/100).toFixed(2).replace(".", ",")} €`}</span></div>
            </div>

          );
        }
        return;
      })}
    </ul>
  );

  return (
    <section className={classes.itemsList}>
      {storeItems}
    </section>
  );
};

export default Month;
