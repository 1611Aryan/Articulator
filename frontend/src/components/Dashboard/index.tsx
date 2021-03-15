import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import DashboardNav from "./DashboardNav";
import NewNotebook from "./NewNotebook";
import Notebook from "./Notebook";
import Canvas from "./Canvas";
import SideBar from "./SideBar";
import pebblesJpg from "../../IMG/pebbels.jpg";
import pebblesWebp from "../../IMG/pebbels.webp";
import pebblesAvif from "../../IMG/pebbels.avif";

const Dashboard: React.FC<{
  setToken: any;
  user: {
    name: String;
    id: String;
    iat: number;
  };
  token: String;
}> = ({ setToken, user, token }) => {
  //URL
  const url =
    process.env.NODE_ENV === "production"
      ? "/notebook"
      : "http://localhost:5000/notebook";

  //State
  const [notebooks, setNotebooks] = useState<
    | {
        id: String;
        name: String;
        content: String;
      }[]
    | null
  >(null);
  const [sidebar, setSidebar] = useState(false);

  //Effect
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/${user.id}`, {
          headers: { authToken: token },
        });
        setNotebooks(res.data.notebooks);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url, token, user.id]);

  return (
    <StyledDashboard>
      <SideBar setSidebar={setSidebar} sidebar={sidebar} setToken={setToken} />
      <DashboardNav setSidebar={setSidebar} />
      <StyledDashboardContent>
        <div className="bg">
          <picture>
            <source srcSet={pebblesAvif} type="image/avif" />
            <source srcSet={pebblesWebp} type="image/webp" />
            <source srcSet={pebblesJpg} type="image/jpg" />
            <img src={pebblesJpg} alt="pebbles" />
          </picture>
        </div>
        <div className="overlay"></div>
        <Canvas />
        <div className="subNav">
          <h3>Hello There {user.name}!</h3>
        </div>
        <ul>
          {notebooks &&
            notebooks.map((notebook, index) => (
              <Notebook
                key={index}
                pos={index}
                id={user.id}
                notebook={notebook}
                setNotebooks={setNotebooks}
                token={token}
              />
            ))}
          <NewNotebook
            setNotebooks={setNotebooks}
            token={token}
            id={user.id}
            notebooks={notebooks}
          />
        </ul>
      </StyledDashboardContent>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.main`
  --dashNavHeight: 10vh;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2efea;

  .sidebarVisible {
    transform: translateX(0);
    pointer-events: auto;
  }
`;

const StyledDashboardContent = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1rem;
  z-index: 2;
  background: #ffffffaa;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  .subNav {
    color: #303030;
    color: #e8e8e8;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 2px solid #e8e8e8;
    font-size: 1rem;
  }
  ul {
    width: 100%;
    max-height: calc(100% - 2rem);
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0 2rem 0;
    gap: 5%;
    overflow: hidden auto;
    scrollbar-color: #e8e8e8 #fc7753;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #fc7753;
    }
    ::-webkit-scrollbar-thumb {
      background: #e8e8e8;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  li {
    margin-bottom: 5%;
  }
`;

export default Dashboard;
