import { FormStyle } from "./styles";
import React, { useContext } from "react";
import { schemaLogin, schemaRegister } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext, IUserContext } from "../../providers/AuthProvider";
import { notify } from "../../utils/toast";

export interface IFormProps {
  children?: React.ReactNode;
  text: string;
}

export const Form = ({ children, text }: IFormProps) => {
  if (text === "Login") {
    const { signIn } = useContext<IUserContext>(AuthContext);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schemaLogin),
    });

    return (
      <>
        <FormStyle onSubmit={handleSubmit(signIn)}>
          <h2>{text}</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@mail.com"
            {...register("email")}
          />
          <span>{errors.email?.message?.toString()}</span>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          <span>{errors.password?.message?.toString()}</span>
          {children}
        </FormStyle>
      </>
    );
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegister),
  });

  const navigate = useNavigate();

  const handleRegister = async (data: any) => {
    try {
      await api.post("/users", data);
      notify("Successfully registered");

      navigate("/login");
    } catch (error) {
      notify("failed to register");
      console.error(error);
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit(handleRegister)}>
      <h2>{text}</h2>

      <p>Rapido e grátis, vamos nessa</p>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <span>{errors.name?.message?.toString()}</span>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <span>{errors.email?.message?.toString()}</span>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <span>{errors.password?.message?.toString()}</span>

      <label htmlFor="confirm-password">Confirmar Senha</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Digite novamente sua senha"
        {...register("confirm_password")}
      />
      <span>{errors.confirm_password?.message?.toString()}</span>

      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <span>{errors.bio?.message?.toString()}</span>

      <label htmlFor="contact">Contato</label>
      <input
        type="text"
        id="contact"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      <span>{errors.contact?.message?.toString()}</span>

      <label htmlFor="modulo">Selecionar módulo</label>
      <select
        defaultValue={"Primeiro módulo"}
        id="modulo"
        {...register("course_module")}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
        <option value="Quinto módulo (Introdução ao Fullstack)">
          Quinto módulo
        </option>
        <option value="Sexto módulo(Fullstack Avançado)">Sexto módulo</option>
      </select>
      {children}
    </FormStyle>
  );
};
