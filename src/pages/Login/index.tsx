import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { IUserLogin } from "../../Providers/user";
import "../../styles/pages/login.sass"

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
    <div className='divLogin' >
      <form onSubmit={handleSubmit(userLogin)}>
        <h2>Login</h2>
        <div>
          <label  className='divvv' htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="pass">Senha</label>
          <input type="password" id="pass" placeholder="Digite sua senha" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <button className='buttonSubmit' type='submit'>Entrar</button>
        </div>
        <div>
          <span>Ainda não possui conta?</span>
          <button type='button' onClick={()=>onClick()}>Cadastre-se</button>
        </div>

      </form>
    </div>
  )
};

export default Login;
