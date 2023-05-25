import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IBasicProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
  marginTop?: string;
  color?: string;
  font?: string;
  backgroundColor?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}
