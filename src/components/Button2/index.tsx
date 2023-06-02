import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({
  children,
  type = "button",
  onClick,
  color,
  backgroundColor,
  backgroundColorHover
}: IButtonStyled) => {
  return (
    <ButtonStyled
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      backgroundColorHover={backgroundColorHover}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;
