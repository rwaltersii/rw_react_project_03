import EmployeeItem from "./EmployeeItem";
import classes from "./EmployeeList.module.css";

function EmployeeList(props) {
  return (
    <ul className={classes.list}>
      {props.employee.map((employee) => (
        <EmployeeItem
          key={employee.id}
          id={employee.id}
          name={employee.name}
          badge={employee.badge}
          position={employee.position}
        ></EmployeeItem>
      ))}
    </ul>
  );
}

export default EmployeeList;
