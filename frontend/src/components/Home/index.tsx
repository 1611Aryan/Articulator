import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Background from "../Background";
import Nav from "../Nav";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  let login = true;
  if (login)
    return (
      <StyledHome>
        <Nav />
        <Background />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/signUp" exact>
              <SignUp />
            </Route>
          </Switch>
        </div>
      </StyledHome>
    );
  else return null;
};

const StyledHome = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
