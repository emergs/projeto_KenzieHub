import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IContainerStyled
  extends IBasicProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: string;
  gap?: string;
}

const ContainerStyled = styled.div<IContainerStyled>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.backgroundColor || "var(--gray-4)"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  gap: ${(props) => props.gap || "0px"};

  img {
    width: 300px;
    height: 100px;
  }
`;

export default ContainerStyled;
