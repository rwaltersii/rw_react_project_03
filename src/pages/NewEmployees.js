import { useHistory } from "react-router-dom";
import NewEmployeeForm from "../components/employee/NewEmployeeForm";

function NewEmployees() {
  const history = useHistory();

  function addEmployeeHandler(employeeData) {
    fetch(
      "https://employee-data-74f81-default-rtdb.firebaseio.com/employees.json",
      {
        method: "POST",
        body: JSON.stringify(employeeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Employees Page</h1>
      <NewEmployeeForm onAddEmployee={addEmployeeHandler} />
    </section>
  );
}

export default NewEmployees;
