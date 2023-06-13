import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { IBasicProps } from "../../interfaces";

export interface IButtonStyled
  extends IBasicProps,
    HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  backgroundColorHover?: string;
}

const ButtonStyled = styled.button<IButtonStyled>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "48px"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  border: ${(props) => props.border || "none"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || " var(--gray-0)"};
  font: ${(props) => props.font || "var(--inputs)"};
  background-color: ${(props) => props.backgroundColor || "#59323f"};
  & {
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.backgroundColorHover || "none"};
    }
  }
`;

export default ButtonStyled;
