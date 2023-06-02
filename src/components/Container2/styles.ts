import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IContainerStyled extends IBasicProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ContainerStyled = styled.div<IContainerStyled>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.justifyContent || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.backgroundColor || "var(--gray-4)"};
  border-radius: ${(props) => props.borderRadius || "8px"};
`;

export default ContainerStyled;
