import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 1rem;
  border-radius: 2rem;
  border: none;
  outline: none;
  font-size: 1.8rem;
  padding: 1rem;
  background-color: ${(props) =>
    props.current === props.name ? "white" : "black"};
  letter-spacing: 0.1rem;
  color: ${(props) => (props.current === props.name ? "black" : "white")};
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-family: "Staatliches", cursive;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;

const Button = styled(StyledButton)`
  margin: 1rem 0;
  font-size: 1rem;
  padding: 1rem;
  background-color: "black";
  color: "red";
  text-transform: uppercase;
`;

export { StyledButton, Button };
