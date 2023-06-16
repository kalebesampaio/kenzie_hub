import { FormStyle } from "./styles";
import React from "react";

export interface IFormProps {
  children?: React.ReactNode;
  text: string;
}

export const Form = ({ children, text }: IFormProps) => {
  return (
    <FormStyle>
      <h2>{text}</h2>
      {children}
    </FormStyle>
  );
};
