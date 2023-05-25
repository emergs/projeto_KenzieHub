import { ReactNode } from "react";
import { IChildren } from "../../interfaces";
import ContainerStyled from "./styles";

const Container = ({ children }: IChildren) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
export default Container;
