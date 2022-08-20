import Button from "../Button/styles";
import Headers from "./styles";
import logo from "../../assets/Logo.svg"

const Header = ({onClick})=>{
  return(
    <Headers>
      <div className="containerNavBar">
        <img src={logo} alt="logo" />
        <Button type='button' onClick={onClick}>Voltar</Button>
      </div>
    </Headers>
  )
}
export default Header;