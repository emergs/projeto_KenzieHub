import Container from "../../components/Container/styles";
import Form from "../../components/Form"
import Buttons from "../../components/Button/styles";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import api from "../../services/api"
import Span from "./style";
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  password: yup.string().required('Digite a sua senha')
})

const Login = ({setUser}) => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data)=> {
    function validateLogin(){
      toast.success('Login realizado com sucesso')
      navigate('../dashboard', {replace:true})
      setUser(request.data.user)
      localStorage.setItem('@kenzieHubTOKEN', JSON.stringify(request.data.token))
      localStorage.setItem('@kenzieHubUSERID', JSON.stringify(request.data.user.id))
    }

    function doNotValidateLogin(){
      toast.error('Dados incorretos')
    }

    const request = await api.post('/sessions', data)
    request.status === 200 ? validateLogin() : doNotValidateLogin()
  }

  const onClick = ()=>{
    navigate('../register',{replace:true})
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="pass">Senha</label>
        <input type="password" id="pass" placeholder="Digite sua senha" {...register('password')} />
        <p>{errors.password?.message}</p>

        <Buttons type='submit' colorPrimary>Entrar</Buttons>

        <Span>Ainda não possui conta?</Span>
        <Buttons type='button' onClick={()=>onClick()} gray1>Cadastre-se</Buttons>

      </Form>
    </Container>
  )
};

export default Login;
