import styled from "styled-components";

export const ButtonFormStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 22px;
  gap: 10px;
  width: 324px;
  height: 48px;

  font-size: 16px;
  color: #ffffff;

  background: #${(props) => (props.color ? props.color : "ff577f")};

  border: 1.2px solid #ff577f;
  border-radius: 4px;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
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
`;
