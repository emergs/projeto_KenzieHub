import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IFormStyled
  extends IBasicProps,
    HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  flexDirection?: string;
}

const FormStyled = styled.form<IFormStyled>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  width: ${(props) => props.width || "370px"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.backgroundColor || "var(--gray-3)"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  padding: ${(props) => props.padding || "30px"};

  &div {
    background-color: green;
  }
`;

export default FormStyled;
