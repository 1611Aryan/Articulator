import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import NewNotebook from "./NewNotebook";
import Notebook from "./Notebook";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledHeader>
        <h3>Hello Aryan</h3>
        <FontAwesomeIcon icon={faWrench} />
      </StyledHeader>
      <StyledSection>
        <h4>My Notebooks</h4>
        <ul>
          <Notebook />
          <Notebook />
          <NewNotebook />
        </ul>
      </StyledSection>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.main`
  z-index: 5;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fdcd73;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  svg {
    font-size: 2em;
    cursor: pointer;
  }
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  padding: 1rem;
  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export default Dashboard;
