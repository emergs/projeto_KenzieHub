import TitleStyled, { ITitleStyled } from "./styles";

const Title = ({ font, children }: ITitleStyled) => {
  return <TitleStyled font={font}>{children}</TitleStyled>;
};
export default Title;
