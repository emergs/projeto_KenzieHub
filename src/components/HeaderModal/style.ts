import styled from "styled-components";
import { IBasicProps } from "../../interfaces";
import { HTMLAttributes } from "react";

export interface IHeaderModal {
  title: string;
  btnClose: () => void;
}

export interface IHeaderModalStyled extends IBasicProps, HTMLAttributes<HTMLDivElement> {
  flexDirection?: string;
}

export const HeaderModalStyled = styled.div<IHeaderModalStyled>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`