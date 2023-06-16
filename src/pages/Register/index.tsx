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
          <p>Rapido e grátis, vamos nessa</p>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite aqui seu nome" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite aqui seu email" />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
          />

          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Digite novamente sua senha"
          />

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="Fale sobre você" />

          <label htmlFor="contact">Contato</label>
          <input type="text" id="contact" placeholder="Opção de contato" />

          <label htmlFor="modulo">Selecionar módulo</label>
          <select name="modulo" id="modulo">
            <option value="Primeiro módulo">Primeiro módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo" selected>
              Terceiro módulo
            </option>
            <option value="Quarto módulo">Quarto módulo</option>
            <option value="Quinto módulo">Quinto módulo</option>
            <option value="Sexto módulo">Sexto módulo</option>
          </select>

          <ButtonForm>Cadastrar</ButtonForm>
        </Form>
      </ContainerRegister>
    </RegisterStyle>
  );
};
