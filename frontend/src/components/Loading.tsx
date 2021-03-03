import styled, { css } from "styled-components";
import { useRef } from "react";

const Loading = () => {
  //ref
  const divRef = useRef<HTMLDivElement>(null);

  window.addEventListener("load", () => {
    setTimeout(() => divRef.current?.classList.add("hide-loading"), 100);
  });

  return (
    <StyledLoading ref={divRef}>
      <h1>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>&nbsp;</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h1>
    </StyledLoading>
  );
};

const createCSS = () => {
  let styles = "";
  for (let i = 1; i < 18; i++) {
    styles += `
         span:nth-of-type(${i}){
             animation: rotateY 0.7s linear alternate ${i * 0.7}s
         }
       `;
  }

  return css`
    ${styles}
  `;
};

const StyledLoading = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: clamp(1rem, 4vw, 2rem);
  transition: opacity ease-out 0.5s;
  will-change: opacity;
  span {
    display: inline-block;
    /* background: linear-gradient(
      -25deg,
      #dedede,
      #eee 16%,
      #dedede 21%,
      #eee 24%,
      #454545 27%,
      #dedede 36%,
      #eee 45%,
      #ffffff 60%,
      #dedede 72%,
      #eee 80%,
      #dedede 84%,
      #a1a1a1
    ); */
    background: linear-gradient(#eee, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${createCSS()};
  @keyframes rotateY {
    to {
      transform: rotateY(360deg);
    }
  }
`;

export default Loading;
