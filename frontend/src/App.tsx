import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Loading />
      <Home />
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
