import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface ILabelAndInputStyled
  extends IBasicProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const LabelAndInputStyled = styled.div<ILabelAndInputStyled>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
`;

export default LabelAndInputStyled;
