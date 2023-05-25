import Headers from "./styles";
import logo from "../../assets/Logo.svg"
import Button from "../Button2";

const Header = ({onClick}:any)=>{
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