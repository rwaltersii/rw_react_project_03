import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewEmployeeForm.module.css";

function NewEmployeeForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const positionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPosition = positionInputRef.current.value;

    const employeeData = {
      name: enteredName,
      image: enteredImage,
      position: enteredPosition,
    };
    props.onAddEmployee(employeeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Full Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Photo URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="position">Position</label>
          <input type="text" required id="position" ref={positionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Employee</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEmployeeForm;
