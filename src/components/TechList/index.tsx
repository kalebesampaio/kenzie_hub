import { useContext } from "react";
import {
  ButtonTitle,
  ContainerList,
  ContainerTech,
  ContainerTitle,
  ItemStatus,
  ItemTitle,
  TechListStyle,
  Techs,
  TitleTech,
} from "./style";
import { AuthContext } from "../../providers/AuthProvider";
import { TechContext } from "../../providers/TechProvider";
interface IProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TechList = ({
  isOpenModal,
  setIsOpenModal,
  setIsOpenModalCreate,
}: IProps) => {
  const { user } = useContext(AuthContext);
  const { setIsTechId, setTechName } = useContext(TechContext);
  return (
    <TechListStyle>
      <ContainerTech>
        <ContainerTitle>
          <TitleTech>Tecnologias</TitleTech>
          <ButtonTitle onClick={() => setIsOpenModalCreate(true)}>
            +
          </ButtonTitle>
        </ContainerTitle>

        <ContainerList>
          {user?.techs.map((tech) => (
            <Techs
              key={tech.id}
              onClick={() => {
                setIsTechId(tech.id);
                setTechName(tech.title);
                setIsOpenModal(!isOpenModal);
              }}
            >
              <ItemTitle>{tech.title}</ItemTitle>
              <ItemStatus>{tech.status}</ItemStatus>
            </Techs>
          ))}
        </ContainerList>
      </ContainerTech>
    </TechListStyle>
  );
};
