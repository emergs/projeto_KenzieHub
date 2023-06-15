import styled from "styled-components";
import { IBasicProps } from "../../interfaces";
import { HTMLAttributes } from "react";

export interface IHeaderModal {
  title: string;
  btnClose: () => void;
}

export interface IHeaderModalStyled
  extends IBasicProps,
    HTMLAttributes<HTMLDivElement> {
  flexDirection?: string;
}

export const HeaderModalStyled = styled.div<IHeaderModalStyled>`
  width: 100%;
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  height: ${(props) => props.height || "50px"};
  padding: ${(props) => props.padding || "20px"};
  background-color: ${(props) => props.backgroundColor || "var(--gray-2)"};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
