import { ButtonFormStyle } from "./styles";
export interface IButtonProps {
  color?: string;
  children?: string;
}

export const ButtonForm = ({ color, children }: IButtonProps) => {
  return <ButtonFormStyle color={color}>{children}</ButtonFormStyle>;
};
