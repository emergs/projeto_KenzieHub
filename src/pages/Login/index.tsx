import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { IUserLogin } from "../../Providers/user"

const schema = yup.object({
  email: yup.string().required('Digite o email').email('Digite um email válido'),
  password: yup.string().required('Digite a sua senha')
})

const Login = () => {
  const navigate = useNavigate()
  const {userLogin} = useContext(UserContext)

  const {register, handleSubmit, formState:{errors}} = useForm<IUserLogin>({
    resolver: yupResolver(schema)
  })

  const onClick = ()=>{
    navigate('../register',{replace:true})
  }

  return(
    <div>
      <form onSubmit={handleSubmit(userLogin)}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="pass">Senha</label>
        <input type="password" id="pass" placeholder="Digite sua senha" {...register('password')} />
        <p>{errors.password?.message}</p>

        <button type='submit'>Entrar</button>

        <span>Ainda não possui conta?</span>
        <button type='button' onClick={()=>onClick()}>Cadastre-se</button>

      </form>
    </div>
  )
};

export default Login;
