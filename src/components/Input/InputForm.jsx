import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./InputForm.module.css";
import StoreContext from "../../store/store-context";
import ErrorMessage from "./ErrorMessage";

/**
 * This is the input form component.
 */

const InputForm = () => {
  const storeCtx = useContext(StoreContext);
  const defaultDate = new Date().toISOString().substring(0, 10);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  /**
   * This method  is to validate the title and amount fields. Returns the array of errors.
   * The other two fields have default values.
   */
  const validateData = (item) => {
    let errors = [];
    if (item.title.length < 0) {
      errors.push("title");
    }
    if (isNaN(item.amount)) {
      errors.push("amount");
    }

    return errors;
  };

  /**
   * Submit method for a form. Collects all data from the form. 
   * And if there are no errors, adds a new data object to the context and goes to the page with all data displayed.
   */
  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random(),
      title: event.target.title.value.trim(),
      type: event.target.revenue.checked === true ? "revenue" : "expenses",
      amount: parseFloat(event.target.amount.value) * 100,
      date: event.target.date.value,
    };
    const errors = validateData(item);
    if (errors.length > 0) {
      setIsError(true);
      return;
    } else {
      storeCtx.addItem(item);
      setIsError(false);
      navigate("/list/:monthId");
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {isError && <ErrorMessage />}
      <div className={`${classes.formLine} ${classes.titleTypeGroup}`}>
        <label htmlFor="title">Titel:</label>
        <input id="title" type="text" name="title" placeholder="z.B.Einkauf" />
        <input id="revenue" value="revenue" type="radio" name="type" />
        <label htmlFor="revenue">Einnahme</label>
        <input
          id="expenses"
          value="expenses"
          type="radio"
          name="type"
          defaultChecked
        />
        <label htmlFor="expenses">Ausgabe</label>
      </div>

      <div className={classes.formLine}>
        <label htmlFor="amount">Betrag:</label>
        <input id="amount" type="text" name="amount" placeholder="z.B. 50,85" />
        <label htmlFor="date">Datum:</label>
        <input
          id="date"
          type="date"
          name="date"
          placeholder="jjjj-mm-dd"
          defaultValue={defaultDate}
          className={classes.dateInput}
        />
      </div>

      <div className={classes.formLine}>
        <button className={classes.button}>Submit</button>
      </div>
    </form>
  );
};

export default InputForm;
