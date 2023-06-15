import styled from "styled-components";
import { IBasicProps } from "../../interfaces";
import { HTMLAttributes } from "react";

interface ISpanStyled extends IBasicProps, HTMLAttributes<HTMLSpanElement> {
  marginTop?: string;
}

export const Span = styled.span<ISpanStyled>`
  color: ${(props) => props.color || "var(--gray-0)"};
  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "20px"};
`