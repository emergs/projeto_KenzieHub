import FormStyled, { IFormStyled } from "./styles";

const Form = ({ children, ...rest }: IFormStyled) => {
  return <FormStyled {...rest}>{children}</FormStyled>;
};

export default Form;
