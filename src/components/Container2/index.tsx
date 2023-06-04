import ContainerStyled, { IContainerStyled } from "./styles";

const Container = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  height,
  width,
}: IContainerStyled) => {
  return (
    <ContainerStyled
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      height={height}
      flexDirection={flexDirection}
      width={width}
    >
      {children}
    </ContainerStyled>
  );
};
export default Container;
