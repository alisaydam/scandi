import styled from "styled-components";

const StyledModal = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
