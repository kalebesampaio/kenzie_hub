import { z } from "zod";
import {
  ModalContainer,
  ModalHeader,
  ModalStyle,
  ContainerButton,
} from "./styles";
import { useContext } from "react";
import { ITechContext, TechContext } from "../../providers/TechProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}

const ModalEdit = ({ setIsOpenModal, isOpenModal }: Props) => {
  const schemaTech = z.object({
    status: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaTech),
  });

  const { deleteTech, updateTech, techName } =
    useContext<ITechContext>(TechContext);
  return (
    <ModalContainer>
      <ModalStyle>
        <ModalHeader>
          <h3>Tecnologia Detalhes</h3>
          <button
            className="close"
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            X
          </button>
        </ModalHeader>

        <form onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="techName">Nome</label>
          <input placeholder={techName} id="techName" disabled />
          <label htmlFor="techStatus">Status</label>
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
              Salvar alterações
            </button>
            <button
              type="button"
              className="buttonDelete"
              onClick={(e) => {
                e.preventDefault();
                deleteTech();
              }}
            >
              Excluir
            </button>
          </ContainerButton>
        </form>
      </ModalStyle>
    </ModalContainer>
  );
};
export default ModalEdit;
