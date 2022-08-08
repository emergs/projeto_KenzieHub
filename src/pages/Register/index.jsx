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
  senha: yup.string().required("Senha obrigatória"),
  senha: yup.string().required("Senha obrigatória"),
  bio: yup.string().required("Bio obrigatória"),
  contato: yup.string().required("Número de contato obrigatório"),
})

const Register = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  return (
    <Container>
      <Header/>
      <Form onSubmit={()=>handleSubmit}>
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
        <input placeholder='Confirme aqui sua senha' {...register("password")}/>
        <p>{errors.password?.message}</p>

        <label>Bio</label>
        <input placeholder='Digite aqui sua bio' {...register("bio")}/>
        <p>{errors.bio?.message}</p>

        <label>Contato</label>
        <input placeholder='Digite aqui seu telefone' {...register("cellNumber")}/>
        <p>{errors.cellNumber?.message}</p>

        <label>Selecionar</label>
        <select placeholder='Digite aqui seu telefone' {...register("cellNumber")}>
          <option value="">Primeiro Módulo</option>
          <option value="">Segundo Módulo</option>
        </select>
        <p>{errors.cellNumber?.message}</p>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
