import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface ILabelStyled
  extends IBasicProps,
    HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const LabelStyled = styled.h1<ILabelStyled>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
`;

export default LabelStyled;
