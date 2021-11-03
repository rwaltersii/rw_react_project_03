import classes from "./Backdrop.module.css";

// 'props' are used to get access to the "onCancel" attribute shown below
// The 'onClick' is triggered if the user clicks anywhere off the popup
function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}>
      Robert
    </div>
  );
}

export default Backdrop;
