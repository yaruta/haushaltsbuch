import React, { useContext } from "react";
import classes from "./InputItem.module.css";
import binIcon from "../../assets/fonts/uicons/svg/fi-tr-x.svg";
import editIcon from "../../assets/fonts/uicons/svg/fi-tr-pen-clip.svg";
import StoreContext from "../../store/store-context";

/**
 * This is a component for displaying one item from those added to the household book.
 */
const InputItem = (props) => {
  const storeCtx = useContext(StoreContext);

  /**
   * This is a method to remove the item from the context.
   */
  const removeItemHandler = () => {
    storeCtx.removeItem(props.id, props.monthId, props.type, props.amount);
  };

  const editItemHandler = (event) => {
    // to do edit function
  };

  return (
    <li className={classes.inputItem}>
      <div className={classes.dateLine}>
        <div>{props.date}</div>
        <img
          src={editIcon}
          alt="edit"
          className={classes.button}
          onClick={editItemHandler}
        />
        <img
          src={binIcon}
          alt="bin"
          className={classes.button}
          onClick={removeItemHandler}
        />
      </div>
      <div className={classes.titleLine}>
        <div>{props.title}</div>
        <div
          className={
            props.type === "expenses" ? classes.expenses : classes.revenue
          }
        >{`${(props.amount / 100).toFixed(2).replace(".", ",")} €`}</div>
      </div>
    </li>
  );
};

export default InputItem;
