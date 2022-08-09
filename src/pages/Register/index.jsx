import Container from "../../components/Container/styles";
import Form from "../../components/Form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Button from "../../components/Button";

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("email obrigatório").email('email inválido'),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup.string().required("Senha obrigatória"),
  bio: yup.string().required("Bio obrigatória"),
  cellNumber: yup.string().required("Número de contato obrigatório"),
  selectCategory: yup.string().required('Selecione o módulo por favor')
})

const Register = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  const submit = (data)=>{
    console.log(data)
  }

  return (
    <Container>
      <Header/>
      <Form onSubmit={handleSubmit(submit)}>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
    
        <label>Nome</label>
        <input placeholder='Digite aqui seu nome' {...register("name")}/>
        <p>{errors.name?.message}</p>

        <label>Email</label>
        <input placeholder='Digite aqui seu email' {...register("email")}/>
        <p>{errors.email?.message}</p>

        <label>Senha</label>
        <input placeholder='Digite aqui sua senha' {...register("password")}/>
        <p>{errors.password?.message}</p>

        <label>Confirmar Senha</label>
        <input placeholder='Confirme aqui sua senha' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword?.message}</p>

        <label>Bio</label>
        <input placeholder='Digite aqui sua bio' {...register("bio")}/>
        <p>{errors.bio?.message}</p>

        <label>Contato</label>
        <input placeholder='Digite aqui seu telefone' {...register("cellNumber")}/>
        <p>{errors.cellNumber?.message}</p>

        <label>Selecionar</label>
        <select {...register("selectCategory")}>
          <option value="firstModule">Primeiro Módulo</option>
          <option value="secondModule">Segundo Módulo</option>
        </select>
        <p>{errors.cellNumber?.message}</p>

        <Button type='submit'>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
