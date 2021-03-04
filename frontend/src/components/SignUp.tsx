import { useState, useEffect } from "react";
import axios from "axios";
import { StyledForm, StyledLogin } from "./../Style";
import { _escapeString } from "./../util";

const SignUp = () => {
  //URL
  const url =
    process.env.NODE_ENV === "production"
      ? "/user/signup"
      : "http://localhost:5000/user/signup";

  //State
  const [input, setInput] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const [animate, setAnimate] = useState(false);
  const [message, setMessage] = useState("");

  //Effects
  useEffect(() => {
    localStorage.getItem("accessToken");
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
        name: input.name,
        password: input.password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data, err.response.status);
      setMessage(err.response.data);
    } finally {
      setInput({ email: "", password: "", name: "" });
    }
  };

  //Variants
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
      <h3>Sign Up</h3>
      <StyledForm>
        <div className="fieldContainer">
          <p>{message}</p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            autoFocus
            onChange={changeHandler}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required onChange={changeHandler} />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            required
            onChange={changeHandler}
          />
        </div>
        <button>Sign Up!!!</button>
      </StyledForm>
    </StyledLogin>
  );
};

export default SignUp;
