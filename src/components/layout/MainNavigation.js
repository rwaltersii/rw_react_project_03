import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>LiveLive Production Reporting</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Employees</Link>
          </li>
          <li>
            <Link to="/new-employees">Add New Employee</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
