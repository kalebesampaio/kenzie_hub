import { useNavigate } from "react-router-dom";
import { ContainerNavbar, NavbarStyle, Logo, ButtonNavbar } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("../login", { replace: true });
  };
  return (
    <NavbarStyle>
      <ContainerNavbar>
        <Logo>Kenzie Hub</Logo>
        <ButtonNavbar onClick={logout}>Sair</ButtonNavbar>
      </ContainerNavbar>
    </NavbarStyle>
  );
};
