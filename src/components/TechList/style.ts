import { styled } from "styled-components";

export const TechListStyle = styled.div`
  width: 100%;
  background: var(--grey-4);
  display: flex;

  justify-content: center;
`;

export const ContainerTech = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  flex-direction: column;
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleTech = styled.h3`
  font-size: 1.2rem;
  color: var(--grey-0);
`;

export const ButtonTitle = styled.button`
  width: 32px;
  height: 32px;

  background: var(--grey-3);
  border-radius: 4px;

  font-size: 1.5rem;
  text-align: center;
  color: var(--grey-0);

  cursor: pointer;

  &:hover {
    background-color: var(--grey-2);
  }
`;

export const ContainerList = styled.ul`
  width: 100%;
  min-height: 416px;

  background: var(--grey-3);
  border-radius: 4px;
  padding: 20px;
`;

export const Techs = styled.button`
  width: 100%;
  height: 49px;
  background: var(--grey-4);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #343b41;
  }
`;

export const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 0.9rem;

  color: #ffffff;
`;

export const ItemStatus = styled.span`
  font-size: 0.8rem;

  color: var(--grey-1);
`;
