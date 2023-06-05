import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IInput extends HTMLAttributes<HTMLInputElement> {
  type: "email" | "password" | "text" | "tel";
  placeholder: string;
  name: string;
  label: string;
}

export interface IInputStyled extends IBasicProps {
  children: ReactNode;
  flexDirection?: string;
}

const InputStyled = styled.div<IInputStyled>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
  gap: 10px;

  label {
    font: var(--headline);
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid var(--gray-1);
    border-radius: 4px;
    background-color: var(--gray-2);
    color: var(--gray-0);
    padding-left: 15px;
    margin-bottom: 10px;
    & {
      :focus {
        padding-left: 15px;
        outline: 1px solid var(--gray-0);
        ::placeholder {
          padding-left: 0px;
        }
      }
    }
  }
  span {
    font: var(--headline);
    color: var(--danger);
    margin-top: 0px;
  }
`;

export default InputStyled;
