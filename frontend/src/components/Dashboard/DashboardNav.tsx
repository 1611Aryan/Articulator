import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const DashboardNav: React.FC<{
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setSidebar }) => {
  //Handlers
  const showSideBar = () => {
    setSidebar(true);
  };

  return (
    <StyledDashNav id="dashNav">
      <h1>ARTICULATOR</h1>
      <FontAwesomeIcon icon={faWrench} onClick={showSideBar} />
    </StyledDashNav>
  );
};

const StyledDashNav = styled.nav`
  z-index: 2;
  width: 100vw;
  height: var(--dashNavHeight);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fc7753;
  color: #e8e8e8;
  svg {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    cursor: pointer;
  }
`;

export default DashboardNav;
