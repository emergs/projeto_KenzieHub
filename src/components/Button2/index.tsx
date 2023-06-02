import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({
  children,
  type = "button",
  onClick,
  color,
  backgroundColor,
}: IButtonStyled) => {
  return (
    <ButtonStyled
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;
