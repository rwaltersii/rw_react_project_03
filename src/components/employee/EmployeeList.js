import EmployeeItem from "./EmployeeItem";
import classes from "./EmployeeList.module.css";

function EmployeeList(props) {
  return (
    <ul className={classes.list}>
      {props.employee.map((employee) => (
        <EmployeeItem
          key={employee.id}
          id={employee.id}
          image={employee.image}
          name={employee.name}
          position={employee.position}
        />
      ))}
    </ul>
  );
}

export default EmployeeList;
