import Container from "../../components/Container/styles";
import Form from "../../components/Form"
import Buttons from "../../components/Button/styles";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import api from "../../services/api"
import Span from "./style";
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  password: yup.string().required('Digite a sua senha')
})

const Login = () => {
  const [statusRequest,setStatusRequest] = useState(false)
  const [responseRequest, setResponseRequest] = useState([])
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data)=> {
    api.post('/sessions', data)
    .then((response)=>setResponseRequest(response))
    .catch((err)=>console.log(err));

    console.log(responseRequest)
    responseRequest?.status === 200 ? 
    toast.success('Login realizado com sucesso', navigate('../dashboard', {replace:true})) 
    : 
    toast.error('Dados incorretos')
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
