import { ButtonForm } from "../../components/ButtonForm";
import { Form } from "../../components/Form";
import { ContainerLogin, LoginStyle } from "./style";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginStyle>
      <h1>Kenzie Hub</h1>
      <ContainerLogin>
        <Form text={"Login"}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="seuemail@mail.com" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
          <ButtonForm>Entrar</ButtonForm>
        </Form>
        <p>Ainda não possui uma conta?</p>
        <ButtonForm
          click={() => navigate("../register", { replace: true })}
          color={"868E96"}
        >
          Cadastre-se
        </ButtonForm>
      </ContainerLogin>
    </LoginStyle>
  );
};
