import ContainerStyled, { IContainerStyled } from "./styles";

const Container = ({ children, ...rest }: IContainerStyled) => {
  return <ContainerStyled {...rest}>{children}</ContainerStyled>;
};
export default Container;
