import styled from "styled-components";
import { useState } from "react";
import DashboardNav from "./DashboardNav";
import NewNotebook from "./NewNotebook";
import Notebook from "./Notebook";
import Canvas from "./Canvas";

const Dashboard = () => {
  const [notebooks, setNotebooks] = useState(["Notebook 1", "Ideas", "Random"]);

  return (
    <StyledDashboard>
      <DashboardNav />
      <Canvas />
      <StyledDashboardContent>
        <div className="subNav">
          <h3>Hello There Aryan!</h3>
        </div>
        <ul>
          {notebooks.map((notebook, index) => (
            <Notebook
              key={index}
              pos={index}
              title={notebook}
              setNotebooks={setNotebooks}
            />
          ))}
          <NewNotebook setNotebooks={setNotebooks} />
        </ul>
      </StyledDashboardContent>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.main`
  z-index: 5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2efea;
`;

const StyledDashboardContent = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  padding: 1rem;
  z-index: 2;
  .subNav {
    color: #303030;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 2px solid #303030;
  }
  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
    gap: 5%;
    overflow: hidden auto;
  }
  li {
    margin-bottom: 5%;
  }
`;

export default Dashboard;
