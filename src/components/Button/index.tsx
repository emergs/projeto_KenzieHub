import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({ children, type = "button", ...rest }: IButtonStyled) => {
  return (
    <ButtonStyled {...rest} type={type}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
