import { styled } from "styled-components";

export const NavbarStyle = styled.nav`
  width: 100%;
  height: 72px;
  background: var(--grey-4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px ridge rgba(134, 142, 150, 0.3);
`;

export const ContainerNavbar = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const Logo = styled.h1`
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ButtonNavbar = styled.button`
  width: 55px;
  height: 32px;

  background: var(--grey-3);
  border-radius: 4px;

  font-size: 12px;
  text-align: center;
  color: var(--grey-0);

  cursor: pointer;

  &:hover {
    background-color: var(--grey-2);
  }
`;
