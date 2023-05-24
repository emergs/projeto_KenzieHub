import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IContainerStyled extends HTMLAttributes<HTMLDivElement> {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
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
