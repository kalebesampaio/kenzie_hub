import styled from "styled-components";

export const ButtonFormStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 22px;
  width: 324px;
  height: 48px;

  font-size: 1rem;
  color: #ffffff;

  background: #${(props) => (props.color ? props.color : "ff577f")};

  border: 1.2px solid #${(props) => (props.color ? props.color : "ff577f")};
  border-radius: 4px;
  margin-top: 2rem;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #${(props) => (props.color ? "343B41" : "59323F")};
    border: 1.2px solid #${(props) => (props.color ? "343B41" : "59323F")};
    transition: 0.3s;
  }
  &:active {
    animation: pulse 1s;
    transition: 0.3s;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;
