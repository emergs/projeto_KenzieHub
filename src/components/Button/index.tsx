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
  id,
}: IButtonStyled) => {
  return (
    <ButtonStyled
      id={id}
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
