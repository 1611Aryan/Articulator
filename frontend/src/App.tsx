import Background from "./components/Background";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Background />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route to="/signUp" exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
