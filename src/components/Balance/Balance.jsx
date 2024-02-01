import { useContext } from "react";
import classes from "./Balance.module.css";
import StoreContext from "../../store/store-context";

/**
 * This is the component to display the balance for the entire time period.
 * We take information from the context.
 */

const Balance = () => {
  const storeCtx = useContext(StoreContext);

  return (
    <section className={classes.balanceSection}>
      <h1>Gesamtbilanz</h1>
      <div>
        <span>Einnahmen:</span>
        <span>{`${(storeCtx.balance.revenue / 100)
          .toFixed(2)
          .replace(".", ",")} €`}</span>
      </div>
      <div>
        <span>Ausgaben:</span>
        <span>{`${(storeCtx.balance.expenses / 100)
          .toFixed(2)
          .replace(".", ",")} €`}</span>
      </div>
      <div
        className={
          storeCtx.balance.balance >= 0 ? classes.positive : classes.negative
        }
      >
        <span>Bilanz:</span>
        <span>{`${(storeCtx.balance.balance / 100)
          .toFixed(2)
          .replace(".", ",")} €`}</span>
      </div>
    </section>
  );
};

export default Balance;
