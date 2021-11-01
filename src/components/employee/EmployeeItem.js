import classes from "./EmployeeItem.module.css";
import Card from "../ui/Card";

function EmployeeItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </div>
        <div className={classes.actions}>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </Card>
    </li>
  );
}

export default EmployeeItem;
