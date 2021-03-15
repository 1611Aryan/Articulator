import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCheck,
  faTimes,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Notebook: React.FC<{
  notebook: {
    id: String;
    name: String;
    content: String;
  };
  pos: number;
  setNotebooks: React.Dispatch<
    React.SetStateAction<
      | {
          id: String;
          name: String;
          content: String;
        }[]
      | null
    >
  >;
  token: String;
  id: String;
}> = ({ pos, setNotebooks, token, notebook, id }) => {
  //URL
  const url =
    process.env.NODE_ENV === "production"
      ? "/notebook/update"
      : "http://localhost:5000/notebook/update";
  const deleteUrl =
    process.env.NODE_ENV === "production"
      ? "/notebook/delete"
      : "http://localhost:5000/notebook/delete";

  //State
  const [rename, setRename] = useState(false);
  const [newName, setNewName] = useState(notebook.name);

  //Handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const allowRename = () => {
    setRename(!rename);
    setNewName(notebook.name);
  };

  const ChangeName = async () => {
    try {
      const res = await axios.put(
        url,
        {
          id,
          name: newName,
          content: null,
          notebook: notebook.id,
        },
        {
          headers: { authToken: token },
        }
      );
      setNotebooks(notebooks => {
        if (notebooks) {
          return notebooks.map((notebook, index) => {
            if (index === pos) {
              if (newName !== "") return { ...notebook, name: newName };
            }
            return notebook;
          });
        } else return notebooks;
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setRename(false);
  };

  const DeleteNotebook = async () => {
    try {
      const res = await axios.post(
        deleteUrl,
        { id, notebookId: notebook.id },
        {
          headers: { authToken: token },
        }
      );
      setNotebooks(notebooks => {
        if (notebooks) {
          return notebooks.filter(nbk => nbk.id !== notebook.id);
        } else return notebooks;
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledNotebook>
      <StyledNotebookContent></StyledNotebookContent>
      <StyledInformation>
        {rename ? (
          <>
            <input
              value={newName.toString()}
              type="text"
              onChange={changeHandler}
            />
            {newName === "" || newName === notebook.name ? (
              <FontAwesomeIcon
                className="cancel"
                icon={faTimes}
                onClick={allowRename}
              />
            ) : (
              <FontAwesomeIcon
                className="renamed"
                icon={faCheck}
                onClick={ChangeName}
              />
            )}
          </>
        ) : (
          <>
            <p>{notebook.name}</p>
            <div className="iconContainer">
              <FontAwesomeIcon
                className="allowRename"
                icon={faPencilAlt}
                onClick={allowRename}
              />
              <FontAwesomeIcon
                className="delete"
                icon={faDumpster}
                onClick={DeleteNotebook}
              />
            </div>
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
  opacity: 0.975;
  @supports not (aspect-ratio: 1 / 1.1) {
    height: calc((100vw - 2rem) / 5);
  }
`;

const StyledNotebookContent = styled.div`
  width: 100%;
  flex: 1;
  border-radius: 10px;
  background: #fafafa;
`;

const StyledInformation = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fafafa;
  font-size: 1.2rem;
  .cancel {
    &:hover {
      color: #ff5858;
    }
  }
  .renamed {
    &:hover {
      color: #ffff6f;
    }
  }
  .allowRename {
    &:hover {
      color: #ffff6f;
    }
  }
  .delete {
    &:hover {
      color: #ff5858;
    }
  }
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
