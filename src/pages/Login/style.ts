import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: var(--color-primary);
    margin-bottom: 22px;
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 22px;

  width: 369px;
  height: 502px;

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
    align-items: normal;
  }
`;
