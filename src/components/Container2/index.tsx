import { ReactNode } from "react";
import ContainerStyled from "./styles";

interface IChildren {
  children: ReactNode;
}

const Container = ({ children }: IChildren) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
export default Container;
