import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface ISelectInput
  extends IBasicProps,
    HTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export const SelectInputStyled = styled.select<ISelectInput>``;
