import Button from "../Button2";
import logo from "../../assets/Logo.svg";
import { HeaderRegisterStyled } from "./styles";

const HeaderRegister = ({ backToLogin }: any) => {
  return (
    <HeaderRegisterStyled>
      <img src={logo} alt="logo" />
      <Button
        type="button"
        marginTop="0px"
        onClick={backToLogin}>
        Voltar
      </Button>
    </HeaderRegisterStyled>
  );
};

export default HeaderRegister;
