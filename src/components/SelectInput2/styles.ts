import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

interface ISelectOptions {
  value: string;
  content: string;
}

export interface ISelectInput {
  name: string;
  label: string;
  options: Array<ISelectOptions>;
}

export interface ISelectInputStyled
  extends IBasicProps,
    HTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  flexDirection?: string;
}

export const SelectInputStyled = styled.div<ISelectInputStyled>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
  gap: 10px;

  select {
    width: inherit;
    height: 48px;
    border: 1px solid var(--gray-1);
    border-radius: 4px;
    background-color: var(--gray-2);
    color: var(--gray-0);
    padding-left: 15px;
    margin-bottom: 10px;
    & :focus {
      padding-left: 15px;
      outline: 1px solid var(--gray-0);

      ::placeholder {
        padding-left: 0px;
      }
    }
  }

  label {
    font: var(--headline);
  }
`;
