import TitleStyled, { ITitleStyled } from "./styles";

const Title = ({ font, marginBottom, children }: ITitleStyled) => {
  return <TitleStyled font={font} marginBottom={marginBottom}>{children}</TitleStyled>;
};
export default Title;
