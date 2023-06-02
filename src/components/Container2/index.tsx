import ContainerStyled, { IContainerStyled } from "./styles";

const Container = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  height,
}: IContainerStyled) => {
  return (
    <ContainerStyled
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      height={height}
      flexDirection={flexDirection}
    >
      {children}
    </ContainerStyled>
  );
};
export default Container;
