import styled from "styled-components";

export const ModalStyle = styled.div`
  form {
    width: 369px;
    min-height: 292px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    padding: 42px 22px;
  }
  input {
    width: 329.93px;
    height: 48px;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
    padding: 0px 1rem;
    margin-bottom: 10px;
    color: var(--grey-0);
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    margin-bottom: 10px;
    color: var(--grey-0);
  }
  select {
    width: 329.93px;
    height: 48px;

    background: var(--grey-2);

    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;
    color: #868e96;
  }
`;
export const ModalHeader = styled.div`
  width: 369px;
  height: 50px;
  background: #343b41;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  h3 {
    font-weight: 700;
    font-size: 14px;
    color: #f8f9fa;
  }
  button {
    color: #868e96;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const ModalContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerButton = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .buttonSave {
    width: 100%;
    height: 48px;
    cursor: pointer;

    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4px;
    color: #ffffff;
    &:hover {
      background-color: var(--color-primary-focus);
      border: var(--color-primary-focus);
    }
  }
`;
