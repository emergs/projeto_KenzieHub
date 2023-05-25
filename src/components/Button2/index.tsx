import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({ children, type = "button", onClick }: IButtonStyled) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
