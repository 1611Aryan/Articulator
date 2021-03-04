import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Articulate It</Link>
      </h1>
      <h3>
        <Link to="/signUp">Sign Up</Link>
      </h3>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  --navFontColor: #fff;
  width: 100vw;
  height: 8vh;
  backdrop-filter: blur(2px);
  margin-bottom: auto;
  /* position: absolute;
  top: 0;
  left: 0; */
  // border-radius: 0 0 25px 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  color: var(--navFontColor);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
  }
  h3 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    cursor: pointer;
    font-weight: 400;
    a {
      color: var(--navFontColor);
      text-decoration: none;
    }
  }
`;

export default Nav;
