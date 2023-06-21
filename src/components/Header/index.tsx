import { useContext } from "react";
import { ContainerHeader, HeaderStyle, ModuleTitle, UserTitle } from "./style";
import { AuthContext } from "../../providers/AuthProvider";

export const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <HeaderStyle>
      <ContainerHeader>
        <UserTitle>Olá, {user?.name}</UserTitle>
        <ModuleTitle>{user?.course_module}</ModuleTitle>
      </ContainerHeader>
    </HeaderStyle>
  );
};
