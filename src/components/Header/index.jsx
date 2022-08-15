import Button from "../Button";
import Headers from "./styles";
import logo from "../../assets/Logo.svg"

const Header = ({onClick})=>{
  return(
    <Headers>
      <img src={logo} alt="logo" />
      <Button type='button' onClick={onClick}>Voltar</Button>
    </Headers>
  )
}
export default Header;