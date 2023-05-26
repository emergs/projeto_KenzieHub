import LabelAndInputStyle, { ILabelAndInputStyled } from "./styles";

const LabelAndInput = ({ children }: ILabelAndInputStyled) => {
  return <LabelAndInputStyle>{children}</LabelAndInputStyle>;
};
export default LabelAndInput;
