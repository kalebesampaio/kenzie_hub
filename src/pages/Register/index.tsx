import { ButtonForm } from "../../components/ButtonForm";
import { Form } from "../../components/Form";
import { ContainerRegister, ContainerTitle, RegisterStyle } from "./style";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <RegisterStyle>
      <ContainerTitle>
        <h1>Kenzie Hub</h1>
        <button onClick={() => navigate("../login", { replace: true })}>
          Voltar
        </button>
      </ContainerTitle>

      <ContainerRegister>
        <Form text={"Crie sua conta"}>
          <ButtonForm>Cadastrar</ButtonForm>
        </Form>
      </ContainerRegister>
    </RegisterStyle>
  );
};
