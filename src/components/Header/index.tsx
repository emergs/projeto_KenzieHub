import logo from "../../assets/Logo.svg"

const Header = ({onClick}:any)=>{
  return(
    <div>
      <div className="containerNavBar">
        <img src={logo} alt="logo" />
        <button type='button' onClick={onClick}>Voltar</button>
      </div>
    </div>
  )
}
export default Header;