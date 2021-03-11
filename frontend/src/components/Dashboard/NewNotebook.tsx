import styled from "styled-components";

const Notebook: React.FC<{
  setNotebooks: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setNotebooks }) => {
  //handlers
  const addNotebook = () => {
    setNotebooks(notebooks => [
      ...notebooks,
      `Notebook ${notebooks.length + 1}`,
    ]);
  };

  return (
    <StyledNotebook>
      <svg
        width="125"
        height="125"
        viewBox="0 0 125 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={addNotebook}
      >
        <path
          d="M67.5 39.5C67.5 36.7386 65.2614 34.5 62.5 34.5C59.7386 34.5 57.5 36.7386 57.5 39.5H67.5ZM57.5 85.5C57.5 88.2614 59.7386 90.5 62.5 90.5C65.2614 90.5 67.5 88.2614 67.5 85.5H57.5ZM85.5 67.5C88.2614 67.5 90.5 65.2614 90.5 62.5C90.5 59.7386 88.2614 57.5 85.5 57.5V67.5ZM39.5 57.5C36.7386 57.5 34.5 59.7386 34.5 62.5C34.5 65.2614 36.7386 67.5 39.5 67.5V57.5ZM57.5 39.5V62.5H67.5V39.5H57.5ZM57.5 62.5V85.5H67.5V62.5H57.5ZM62.5 67.5H85.5V57.5H62.5V67.5ZM62.5 57.5H39.5V67.5H62.5V57.5ZM115 62.5C115 91.495 91.495 115 62.5 115V125C97.0178 125 125 97.0178 125 62.5H115ZM62.5 115C33.505 115 10 91.495 10 62.5H0C0 97.0178 27.9822 125 62.5 125V115ZM10 62.5C10 33.505 33.505 10 62.5 10V0C27.9822 0 0 27.9822 0 62.5H10ZM62.5 10C91.495 10 115 33.505 115 62.5H125C125 27.9822 97.0178 0 62.5 0V10Z"
          fill="#FAFAFA"
        />
      </svg>
    </StyledNotebook>
  );
};

const StyledNotebook = styled.li`
  width: 20%;
  aspect-ratio: 1/1.1;
  border-radius: 20px;
  background: #026590;
  border: 3px solid #114b5f;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
  svg {
    transform: scale(0.6);
    cursor: pointer;
  }
`;

export default Notebook;
