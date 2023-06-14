import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/Container2";
import Button from "../../components/Button2";
import Title from "../../components/Title2";
import Form from "../../components/Form2";
import { Span } from "../Login/style";
import Input from "../../components/Input2";
import SelectInput from "../../components/SelectInput2";
import { IUserRegister, UserContext } from "../../Providers/user";
import { useContext } from "react";
import HeaderRegister from "../../components/HeaderRegister2";
import { moduleOptions } from "../../utils";
import InputStyled from "../../components/Input2/styles";
import { SelectInputStyled } from "../../components/SelectInput2/styles";

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("email obrigatório").email("email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha tem que ter no mínimo 8 caracteres"),
  confirm_password: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "as duas senhas digitadas são diferentes"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Número de contato obrigatório"),
  course_module: yup.string().required("Selecione o módulo por favor"),
});

const Register = () => {
  const { registerUser, backToLogin } = useContext(UserContext);

  const methods = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  });
  const { handleSubmit, register, formState: { errors }, control } = methods;

  return (
    <Container flexDirection="column" height="100%">
      <HeaderRegister backToLogin={backToLogin} />
      <Form onSubmit={handleSubmit(registerUser)} marginBottom="50px">
        <Title font="var(--title2)">Crie sua conta</Title>
        <Span>Rápido e grátis, vamos nessa</Span>

        <InputStyled>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome" {...register("name")} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" {...register("password")} />

          <label htmlFor="confirm_password">Confirme sua senha</label>
          <input type="password" id="confirm_password" placeholder="Confirme sua senha" {...register("confirm_password")} />

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="Digite sua bio" {...register("bio")} />

          <label htmlFor="contact">Contato</label>
          <input type="text" id="contact" placeholder="Digite seu contato" {...register("contact")} />
        </InputStyled>

        <SelectInputStyled>
          <label htmlFor="module">Módulo</label>
          <select id="module" {...register("course_module")}>
            <option value="primeiroModule">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="segundoModule">Segundo módulo (Frontend Avançado)</option>
            <option value="terceiroModule">Terceiro módulo (Introdução ao Backend)</option>
            <option value="quartoModule">Quarto módulo (Backend Avançado)</option>
          </select>
        </SelectInputStyled>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
