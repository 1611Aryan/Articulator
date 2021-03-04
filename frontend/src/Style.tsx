import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLogin = styled(motion.div)`
  --headingColor: #fff;
  --formBg: rgba(0, 0, 0, 0.2);
  width: 50vw;
  height: 80vh;
  padding: 2rem 0;
  background: var(--formBg);
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h3 {
    color: var(--headingColor);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
  }
  p {
    width: 100%;
    color: red;
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
  //
  @media (max-width: 800px) {
    width: 65vw;
  }
  @media (max-width: 600px) {
    width: 75vw;
    height: 70vh;
    justify-content: space-evenly;
  }
  @media (max-width: 400px) {
    width: 85vw;
    height: 60vh;
    padding: 1rem 0;
  }
`;

export const StyledForm = styled.form`
  --transition: all 0.3s ease-in-out;
  --inputWidth: 80%;
  --labelColor: #f1f1f1;
  --inputColor: #cfcfcf;
  --inputBg: rgba(66, 66, 66, 0.25);
  --inputBgHover: rgba(0, 0, 0, 0.45);
  --linkColor: rgb(252, 255, 98);
  --linkHoverColor: rgb(250, 253, 69);
  --buttonBg: rgba(255, 111, 59, 0.9);
  --buttonColor: rgb(255, 255, 255);
  //
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    font-size: clamp(0.7rem, 3vw, 1.2rem);

    background: var(--inputBgHover);
    -webkit-text-fill-color: var(--inputColor);
    -webkit-box-shadow: 0 0 0px 1000px var(--inputBgHover) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill::first-line {
    font-size: clamp(0.7rem, 3vw, 1.2rem);
    font-family: "Lato", sans-serif;
  }
  //
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  .fieldContainer {
    width: var(--inputWidth);
    margin: 1rem 0;
  }
  label {
    font-size: clamp(1.4rem, 5vw, 1.9rem);
    color: var(--labelColor);
    margin-bottom: 0.5rem;
  }
  input {
    font-family: "Lato", sans-serif;
    width: 100%;
    border: 1px solid var(--labelColor);
    padding: 0.7rem 1rem;
    border-radius: 15px;
    font-size: clamp(0.7rem, 3vw, 1.2rem);
    background: var(--inputBg);
    transition: var(--transition);
    color: var(--inputColor);
    &:focus,
    &:hover {
      outline: 0;
      background: var(--inputBgHover);
    }
  }
  a {
    text-align: right;
    width: var(--inputWidth);
    font-size: clamp(0.7rem, 3vw, 1.2rem);
    color: var(--linkColor);
    transition: var(--transition);
    &:hover {
      color: var(--linkHoverColor);
    }
  }
  button {
    margin: 2rem 0 0 0;
    align-self: center;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 20px;
    background: var(--buttonBg);
    color: var(--buttonColor);
    font-weight: 700;
    font-size: clamp(1rem, 3vw, 1.75rem);
    transition: var(--transition);
    &:hover,
    &:focus {
      background: var(--buttonColor);
      color: var(--buttonBg);
    }
  }
  //
  @media (max-width: 800px) {
    padding: 2rem;
    button {
      padding: 1rem 2rem;
      border-radius: 15px;
    }
  }
  @media (max-width: 600px) {
    padding: 1rem;
    button {
      padding: clamp(0.7rem, 2vw, 1rem) 2rem;
    }
  }
`;
