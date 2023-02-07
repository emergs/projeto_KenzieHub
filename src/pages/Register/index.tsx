import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm  } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import api from '../../services/api';
import * as yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

interface IUserRegister{
  email: string;
  password: string;
  name: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("email obrigatório").email('email inválido'),
  password: yup.string().required("Senha obrigatória").min(8,'A senha tem que ter no mínimo 8 caracteres'),
  confirm_password: yup.string().required("Senha obrigatória").oneOf([yup.ref('password')],'as duas senhas digitadas são diferentes'),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Número de contato obrigatório"),
  course_module: yup.string().required('Selecione o módulo por favor')
})

const Register = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm<IUserRegister>({
    resolver: yupResolver(formSchema)
  })

  const registerUser = async( data:IUserRegister)=>{
    try {
      const request = await api.post('/users',data)
      if(request){
        navigate('../login', {replace:true})
        toast.success('Usuario criado com sucesso!')
      }
    } 
    catch (error:any) {
      toast.error(error.response.data.message)
    }
  }

  const backToLogin = ()=>{
    navigate('../login',{replace:true})
  }

  return (
    <div>
      <Header onClick={backToLogin}/>
      <form onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
    
       
          <label>Nome</label>
          <input placeholder='Nome' {...register("name")}/>
          <p>{errors.name?.message}</p>

          <label>Email</label>
          <input placeholder='Email' {...register("email")}/>
          <p>{errors.email?.message}</p>
        

        <label>Senha</label>
        <input type='password' placeholder='Senha' {...register("password")}/>
        <p>{errors.password?.message}</p>

        <label>Confirmar Senha</label>
        <input type='password' placeholder='Confirmar senha' {...register("confirm_password")}/>
        <p>{errors.confirm_password?.message}</p>

        <label>Bio</label>
        <input placeholder='Bio' {...register("bio")}/>
        <p>{errors.bio?.message}</p>

        <label>Contato</label>
        <input placeholder='Telefone' {...register("contact")}/>
        <p>{errors.contact?.message}</p>

        <label>Selecionar</label>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
