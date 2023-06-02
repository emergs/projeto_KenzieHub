import ContainerStyled, { IContainerStyled } from "./styles";

const Container = ({
  children,
  display,
  alignItems,
  justifyContent,
  height,
}: IContainerStyled) => {
  return (
    <ContainerStyled
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      height={height}
    >
      {children}
    </ContainerStyled>
  );
};
export default Container;
