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
  marginBottom,
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
      marginBottom={marginBottom}
    >
      {children}
    </FormStyled>
  );
};

export default Form;
