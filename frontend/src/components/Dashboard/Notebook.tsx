import styled from "styled-components";

const Notebook = () => {
  return (
    <StyledNotebook>
      <h4>Notebook</h4>
    </StyledNotebook>
  );
};

const StyledNotebook = styled.li`
  width: 20%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #fff;
`;

export default Notebook;
