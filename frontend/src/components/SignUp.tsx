import { useState } from "react";
import { StyledForm, StyledLogin } from "./../Style";
import { _escapeString } from "./../util";

const SignUp = () => {
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
      <h3>Sign Up</h3>
      <StyledForm>
        <div className="fieldContainer">
          <label htmlFor="">Email:</label>
          <input type="email" required autoFocus onChange={changeHandler} />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Password:</label>
          <input type="password" required onChange={changeHandler} />
        </div>
        <button>Sign Up!!!</button>
      </StyledForm>
    </StyledLogin>
  );
};

export default SignUp;
