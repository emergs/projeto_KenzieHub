import { ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface ITitleStyled extends IBasicProps {
  children: ReactNode;
}

const TitleStyled = styled.h1<ITitleStyled>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
`;

export default TitleStyled;
