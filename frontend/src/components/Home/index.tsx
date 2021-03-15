import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import useLocalStorage from "./../../Hooks/useLocalStorage";
import axios from "axios";

import Background from "../Background";
import Nav from "../Nav";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./../../components/Dashboard";

const Home = () => {
  //URL
  const url =
    process.env.NODE_ENV === "production"
      ? "/user/authorize"
      : "http://localhost:5000/user/authorize";

  //Local Storage
  const [token, setToken] = useLocalStorage("auth", null);

  //State
  const [user, setUser] = useState<{
    name: String;
    id: String;
    iat: number;
  } | null>(null);

  useEffect(() => {
    if (token)
      (async () => {
        try {
          const res = await axios.post(
            url,
            {},
            {
              headers: { authToken: token },
            }
          );
          if (res.data.auth) setUser(res.data.user);
          else setToken(null);
        } catch (err) {
          console.log(err);
        }
      })();
    else setUser(null);
  }, [setToken, url, token]);

  if (user === null)
    return (
      <StyledHome>
        <Nav />
        <Background />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Login setToken={setToken} />
            </Route>
            <Route path="/signUp" exact>
              <SignUp />
            </Route>
          </Switch>
        </div>
      </StyledHome>
    );
  else return <Dashboard setToken={setToken} user={user} token={token} />;
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
