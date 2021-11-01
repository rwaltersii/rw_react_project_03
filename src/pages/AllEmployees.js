import EmployeeList from "../components/employee/EmployeeList";
import { useState, useEffect } from "react";

function AllEmployees() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEmployees, setLoadedEmployees] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://employee-data-74f81-default-rtdb.firebaseio.com/employees.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const employees = [];
        for (const key in data) {
          const employee = {
            id: key,
            ...data[key],
          };
          employees.push(employee);
        }
        setIsLoading(false);

        setLoadedEmployees(employees);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading . . . </p>
      </section>
    );
  }
  return (
    <section>
      <h1>Employee Page</h1>
      <EmployeeList employee={loadedEmployees} />
    </section>
  );
}

export default AllEmployees;
