import { useContext } from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalStyle,
  ContainerButton,
} from "./styles";
import { ITechContext, TechContext } from "../../providers/TechProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}

const ModalCreate = ({ setIsOpenModal, isOpenModal }: Props) => {
  const schemaTech = z.object({
    title: z.string().nonempty("Nome obrigatório"),
    status: z.string(),
  });

  const { newTech } = useContext<ITechContext>(TechContext);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schemaTech),
  });

  return (
    <ModalContainer>
      <ModalStyle>
        <ModalHeader>
          <h3>Cadastrar Tecnologia</h3>
          <button
            className="close"
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            X
          </button>
        </ModalHeader>

        <form onSubmit={handleSubmit(newTech)}>
          <label htmlFor="techName">Nome</label>
          <input
            placeholder="Tecnologia"
            id="techName"
            {...register("title")}
          />
          <label htmlFor="techStatus">Selecionar status</label>
          <select
            defaultValue={"Iniciante"}
            id="techStatus"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <ContainerButton>
            <button type="submit" className="buttonSave">
              Cadastrar Tecnologia
            </button>
          </ContainerButton>
        </form>
      </ModalStyle>
    </ModalContainer>
  );
};
export default ModalCreate;
