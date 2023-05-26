import LabelStyled, { ILabelStyled } from "./styles";

const Label = ({ children }: ILabelStyled) => {
  return <LabelStyled>{children}</LabelStyled>;
};
export default Label;
