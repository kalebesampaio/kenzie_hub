import { ContainerNavbar, NavbarStyle, Logo, ButtonNavbar } from "./style";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <ContainerNavbar>
        <Logo>Kenzie Hub</Logo>
        <ButtonNavbar>Sair</ButtonNavbar>
      </ContainerNavbar>
    </NavbarStyle>
  );
};
