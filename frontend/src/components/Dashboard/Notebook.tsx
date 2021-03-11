import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Notebook: React.FC<{
  title: string;
  pos: number;
  setNotebooks: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ title, pos, setNotebooks }) => {
  //State
  const [rename, setRename] = useState(false);
  const [newName, setNewName] = useState("");

  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const allowRename = () => {
    setRename(!rename);
  };

  const ChangeName = () => {
    setNotebooks(notebooks =>
      notebooks.map((notebook, index) => {
        if (index === pos) {
          if (newName !== "") return newName;
        }
        return notebook;
      })
    );
    setRename(false);
  };

  const blurHandler = () => {
    console.log("Blur");
    allowRename();
    setNewName("");
  };

  return (
    <StyledNotebook>
      <StyledNotebookContent></StyledNotebookContent>
      <StyledInformation>
        {rename ? (
          <>
            <input
              value={newName}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
            />
            {newName === "" ? (
              <FontAwesomeIcon icon={faTimes} onClick={allowRename} />
            ) : (
              <FontAwesomeIcon icon={faCheck} onClick={ChangeName} />
            )}
          </>
        ) : (
          <>
            <p>{title}</p>
            <FontAwesomeIcon icon={faPencilAlt} onClick={allowRename} />
          </>
        )}
      </StyledInformation>
    </StyledNotebook>
  );
};

const StyledNotebook = styled.li`
  width: 20%;
  aspect-ratio: 1/1.1;
  border-radius: 20px;
  background: rgb(2, 101, 144);
  border: 3px solid #114b5f;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: lato;
  opacity: 0.95;
`;

const StyledNotebookContent = styled.div`
  width: 100%;
  flex-grow: 1;
  border-radius: 10px;
  background: #fafafa;
  cursor: pointer;
`;

const StyledInformation = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fafafa;
  font-size: 1.2rem;
  input {
    width: 100%;
    border: 0;
    font-size: 0.9rem;
    padding: 0.25rem;
    background: rgba(0, 0, 0, 0.3);
    color: #eeeeee;
    &:focus {
      outline: 0;
    }
  }
  svg {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export default Notebook;
