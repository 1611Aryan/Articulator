import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { _escapeString } from "./../util";
import { StyledForm, StyledLogin } from "./../Style";

const Login = () => {
  //URL
  const url =
    process.env.NODE_ENV === "production"
      ? "/user/login"
      : "http://localhost:5000/user/login";

  //State
  const [input, setInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [animate, setAnimate] = useState(false);
  const [message, setMessage] = useState("");

  //Effects
  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: _escapeString(e.target.value) });
  };
  const submitHandler = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, {
        email: input.email,
        password: input.password,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
    } catch (err) {
      console.log(err.response.data, err.response.status);
      setMessage(err.response.data);
    } finally {
      setInput({ email: "", password: "" });
    }
  };

  //variant
  const variants = {
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
  };

  return (
    <StyledLogin
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={submitHandler}
    >
      <h3 onClick={() => setAnimate(!animate)}>LOGIN!!!!!</h3>
      <StyledForm>
        <div className="fieldContainer">
          <p>{message}</p>
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            name="email"
            value={input.email}
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
            value={input.password}
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
