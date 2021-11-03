import classes from "./EmployeeItem.module.css";
import Card from "../ui/Card";
import img from "../../images/humanheadimage.png";

function EmployeeItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={img} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.badge}</p>
          <p>{props.position}</p>
        </div>
        <div className={classes.actions}>
          {/* If the ADD button is clicked...open the Backdrop */}
          <button>Add</button>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </Card>
    </li>
  );
}

export default EmployeeItem;
