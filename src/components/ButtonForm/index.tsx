import { ButtonFormStyle } from "./styles";
export interface IButtonProps {
  color?: string;
  children?: string;
  click?: any;
}

export const ButtonForm = ({ color, children, click }: IButtonProps) => {
  return (
    <ButtonFormStyle onClick={click} color={color}>
      {children}
    </ButtonFormStyle>
  );
};
