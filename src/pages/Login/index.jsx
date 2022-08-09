import Button from "../../components/Button";
import Container from "../../components/Container/styles";
import Form from "../../components/Form"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Span from "./style";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  pass: yup.string().required('Digite a sua senha')
})

const Login = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data)=> console.log(data)

  const onClick = ()=>{
    navigate('./Register',{replace:true})
    console.log('clicou')
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="pass">Senha</label>
        <input type="password" id="pass" placeholder="Digite sua senha" {...register('pass')} />
        <p>{errors.pass?.message}</p>

        <Button type='submit' >Entrar</Button>

        <Span>Ainda não possui conta?</Span>
        <Button type='button' onClick={()=>onClick()}>Cadastre-se</Button>

      </Form>
    </Container>
  )
};

export default Login;
