import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const DashboardNav = () => {
  return (
    <StyledDashNav id="dashNav">
      <h1>ARTICULATOR</h1>
      <FontAwesomeIcon icon={faWrench} />
    </StyledDashNav>
  );
};

const StyledDashNav = styled.nav`
  width: 100vw;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fc7753;
  color: #e8e8e8;
  svg {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }
`;

export default DashboardNav;
