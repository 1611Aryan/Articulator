import Background from "./components/Background";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Loading />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Login />
          <Background />
        </Route>
        <Route path="/signUp" exact>
          <SignUp />
          <Background />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
