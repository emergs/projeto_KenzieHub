import Forms from './styles'

const Form = ({onSubmit, children})=>{

  return(
    <Forms onSubmit={onSubmit}>
      {children}
    </Forms>
  )
}
export default Form;