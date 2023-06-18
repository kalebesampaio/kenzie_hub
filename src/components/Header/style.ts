import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 118px;
  background-color: var(--grey-4);

  border-bottom: 1px ridge rgba(134, 142, 150, 0.3);
`;

export const ContainerHeader = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: normal;
  }
`;

export const UserTitle = styled.h2`
  font-size: 1.4rem;
  color: var(--grey-0);
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const ModuleTitle = styled.p`
  font-size: 0.9rem;
  color: var(--grey-1);
`;
