import Button from "../Button";
import Title from "../Title";
import { HeaderModalStyled, IHeaderModal } from "./style";

const HeaderModal = ({ title, btnClose }: IHeaderModal) => {
  return (
    <HeaderModalStyled padding="12px 20px 12px 20px">
      <Title font="var(--title3)" color="var(--gray-0)" marginBottom="0px">
        {title}
      </Title>
      <Button
        width="11px"
        height="26px"
        backgroundColor="inherit"
        onClick={() => {
          btnClose();
        }}
      >
        X
      </Button>
    </HeaderModalStyled>
  );
};

export default HeaderModal;
