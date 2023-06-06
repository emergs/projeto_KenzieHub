import ButtonStyled, { IButtonStyled } from "./styles";

const Button = ({
  children,
  type = "button",
  onClick,
  color,
  backgroundColor,
  marginTop,
  backgroundColorHover,
  width,
  height,
}: IButtonStyled) => {
  return (
    <ButtonStyled
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      onClick={onClick}
      backgroundColorHover={backgroundColorHover}
      height={height}
      width={width}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;
