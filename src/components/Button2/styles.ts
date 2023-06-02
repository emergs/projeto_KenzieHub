import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IButtonStyled
  extends IBasicProps,
    HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const ButtonStyled = styled.button<IButtonStyled>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "48px"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  border: ${(props) => props.border || "none"};
  margin-top: ${(props) => props.marginTop || "20px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
  background-color: ${(props) => props.backgroundColor || "#59323f"};
`;

export default ButtonStyled;
