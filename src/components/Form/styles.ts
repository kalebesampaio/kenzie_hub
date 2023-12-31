import styled from "styled-components";

export const FormStyle = styled.form`
  h2 {
    color: var(--grey-0);
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    font-size: 12px;
    color: var(--grey-1);
    text-align: center;
    margin-bottom: 1rem;
  }
  label {
    display: block;
    font-size: 12px;
    color: var(--grey-0);
    padding: 0.5rem 0px;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 329.93px;
    height: 48px;

    background: var(--grey-2);
    color: var(--grey-0);
    font-size: 1rem;
    padding: 0px 1rem;

    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;

    margin-bottom: 10px;
  }
  select {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 329.93px;
    height: 48px;

    background: var(--grey-2);
    color: var(--grey-0);
    font-size: 1rem;
    padding: 0px 1rem;

    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;

    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    color: #e30613;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
    input {
      width: 95%;
    }
    select {
      width: 95%;
    }
  }
`;
