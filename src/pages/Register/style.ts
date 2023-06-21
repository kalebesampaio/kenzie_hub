import styled from "styled-components";

export const RegisterStyle = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--grey-4);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: var(--color-primary);
    margin: 22px 22px;
    font-size: 1.7rem;
    font-weight: bold;
  }
  @media (max-width: 500px) {
    h1 {
      margin: 22px 0px;
    }
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 22px;

  width: 370px;
  min-height: 502px;

  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  p {
    font-size: 12px;
    color: var(--grey-1);
    margin-top: 2rem;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const ContainerTitle = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 67.49px;
    height: 40.11px;

    background: var(--grey-3);
    border-radius: 4px;

    font-size: 12px;
    text-align: center;
    color: var(--grey-0);

    cursor: pointer;

    &:hover {
      background-color: var(--grey-2);
    }
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;
