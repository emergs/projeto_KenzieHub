import Button from "../Button";
import Headers from "./styles";
import {useNavigate} from 'react-router-dom'
import logo from "../../assets/Logo.svg"

const Header = ()=>{
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate('../Login', {replace:true})
  }

  return(
    <Headers>
      <img src={logo} alt="logo" />
      <Button type='button' onClick={()=>onClick()}>Voltar</Button>
    </Headers>
  )
}
export default Header;