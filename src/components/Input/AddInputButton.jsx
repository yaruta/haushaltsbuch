import { useNavigate } from "react-router-dom";
import classes from "./AddInputButton.module.css";

/**
 * This is a component for adding a new value to the household book. 
 * When clicked, you will be taken to the input form page.
 */

const AddInputButton = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes.addButton}>
      <button onClick={navigateHandler}>Neuer Eintrag</button>
    </div>
  );
};

export default AddInputButton;
