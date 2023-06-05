import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({
  children,
  type = "button",
  onClick,
  color,
  backgroundColor,
  marginTop,
  backgroundColorHover
}: IButtonStyled) => {
  return (
    <ButtonStyled
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      onClick={onClick}
      backgroundColorHover={backgroundColorHover}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;
