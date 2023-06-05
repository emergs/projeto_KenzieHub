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

  return (
    <Container flexDirection="column" height="100%">
      <HeaderRegister backToLogin={backToLogin} />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(registerUser)} marginBottom="50px">
          <Title font="var(--title2)">Crie sua conta</Title>
          <Span>Rápido e grátis, vamos nessa</Span>
          <Input
            label="Nome"
            name="name"
            placeholder="Digite seu nome"
            type="text"
          />
          <Input
            label="Email"
            name="email"
            placeholder="Digite aqui seu email"
            type="email"
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Digite aqui sua senha"
            type="password"
          />
          <Input
            label="Confirmar Senha"
            name="confirm_password"
            placeholder="Confirme aqui sua senha"
            type="password"
          />
          <Input
            label="Bio"
            name="bio"
            placeholder="Digite aqui sua bio"
            type="text"
          />
          <Input
            label="Contato"
            name="contact"
            placeholder="Digite aqui seu telefone"
            type="tel"
          />
          <SelectInput />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default Register;
