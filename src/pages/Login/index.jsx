import Button from "../../components/Button";
import Container from "../../components/Container/styles";
import Form from "../../components/Form"
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Span from "./style";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Button/styles";
import api from "../../services/api"
import { useState } from "react";

const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  password: yup.string().required('Digite a sua senha')
})

const Login = () => {
  const [status,setStatus] = useState(false)
  const navigate = useNavigate()
  const navigateDash = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data)=> {
    //console.log(data)
    api.post('/sessions', data)
    .then((response)=> response.status === 200 || 201 ? setStatus(true) : setStatus(false))
    .catch((err)=>console.log(err));

    status === true ? navigateDash('../dashboard', {replace:true}) : console.log(status)
  }

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
