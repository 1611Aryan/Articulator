import { useState } from "react";
import { Link } from "react-router-dom";
import { _escapeString } from "./../util";
import { StyledForm, StyledLogin } from "./../Style";

const Login = () => {
  //State
  const [input, setInput] = useState<{
    email: null | string;
    password: null | string;
  }>({
    email: null,
    password: null,
  });

  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: _escapeString(e.target.value) });
  };

  return (
    <StyledLogin>
      <h3>LOGIN!!!!!</h3>
      <StyledForm autoComplete="off">
        <div className="fieldContainer">
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            name="email"
            required
            autoFocus
            onChange={changeHandler}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="password">Password :</label>
          <br />
          <input
            type="password"
            name="password"
            required
            onChange={changeHandler}
          />
        </div>
        <Link to="/forgot">Forgot Password ?</Link>
        <button>LogIn</button>
      </StyledForm>
    </StyledLogin>
  );
};

export default Login;
