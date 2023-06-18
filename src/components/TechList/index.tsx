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

export const TechList = () => {
  return (
    <TechListStyle>
      <ContainerTech>
        <ContainerTitle>
          <TitleTech>Tecnologias</TitleTech>
          <ButtonTitle>+</ButtonTitle>
        </ContainerTitle>

        <ContainerList>
          <Techs>
            <ItemTitle>React JS</ItemTitle>
            <ItemStatus>Intermediário</ItemStatus>
          </Techs>
        </ContainerList>
      </ContainerTech>
    </TechListStyle>
  );
};
