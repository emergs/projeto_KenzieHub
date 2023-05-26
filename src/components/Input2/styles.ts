import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IInputStyled
  extends IBasicProps,
    HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const InputStyled = styled.input<IInputStyled>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
`;

export default InputStyled;
