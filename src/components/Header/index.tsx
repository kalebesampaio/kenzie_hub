import { ContainerHeader, HeaderStyle, ModuleTitle, UserTitle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <ContainerHeader>
        <UserTitle>Olá, Samuel Leão</UserTitle>
        <ModuleTitle>Primeiro módulo (Introdução ao Frontend)</ModuleTitle>
      </ContainerHeader>
    </HeaderStyle>
  );
};
