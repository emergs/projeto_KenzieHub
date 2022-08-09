import Buttons from "./styles";

const Button = ({type,onClick,children})=>{
  return(
    <Buttons type={type} onClick={onClick}>
      {children}
    </Buttons>
  )

}

export default Button;