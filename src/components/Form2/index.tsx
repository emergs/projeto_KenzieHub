import FormStyled, { IFormStyled } from "./styles";

const Form = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  backgroundColor,
  padding,
  onSubmit,
  width,
  height,
}: IFormStyled) => {
  return (
    <FormStyled
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      padding={padding}
      onSubmit={onSubmit}
      width={width}
      height={height}
    >
      {children}
    </FormStyled>
  );
};

export default Form;
