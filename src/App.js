import { Route, Switch } from "react-router-dom";

import AllEmployees from "./pages/AllEmployees";
import NewEmployees from "./pages/NewEmployees";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllEmployees />
        </Route>
        <Route path="/new-employees">
          <NewEmployees />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
