import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SideBar: React.FC<{
  setToken: any;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebar: boolean;
}> = ({ setToken, setSidebar, sidebar }) => {
  //Handlers
  const hideSideBar = () => {
    setSidebar(false);
  };
  const logout = () => {
    setToken(null);
  };

  return (
    <StyledSideBar className={sidebar ? "sidebarVisible" : ""}>
      <div className="header">
        <FontAwesomeIcon icon={faTimes} onClick={hideSideBar} />
      </div>
      <ul>
        <li onClick={logout}>Logout</li>
      </ul>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.menu`
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.5s ease;
  pointer-events: none;
  .header {
    width: 100%;
    height: var(--dashNavHeight);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
    svg {
      font-size: clamp(1.25rem, 3vw, 1.75rem);
      cursor: pointer;
    }
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    list-style-type: none;
    li {
      cursor: pointer;
    }
  }
`;

export default SideBar;
