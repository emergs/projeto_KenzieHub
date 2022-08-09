import Button from "../Button";
import Headers from "./styles";
import {useNavigate} from 'react-router-dom'

const Header = ()=>{
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate('../Login', {replace:true})
  }

  return(
    <Headers>
      <h1>Logo</h1>
      <Button type='button' onClick={()=>onClick()}>Voltar</Button>
    </Headers>
  )
}
export default Header;