import TitleStyled, { ITitleStyled } from "./styles";

const Title = ({ children, ...rest }: ITitleStyled) => {
  return <TitleStyled {...rest}>{children}</TitleStyled>;
};
export default Title;
