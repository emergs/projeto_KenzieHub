import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Span } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { IUserLogin } from "../../Providers/user";
import Container from "../../components/Container2";
import Title from "../../components/Title2";
import Button from "../../components/Button2";
import Form from "../../components/Form2";
import Input from "../../components/Input2";
import logo from "../../assets/Logo.svg";
import InputStyled from "../../components/Input2/styles";

const schema = yup.object({
  email: yup
    .string()
    .required("Digite o email")
    .email("Digite um email válido"),
  password: yup.string().required("Digite a sua senha"),
});

const Login = () => {
  const { userLogin, navigateToRegister } = useContext(UserContext);

  const { handleSubmit, register, formState: { errors } } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Container height="100vh" flexDirection="column">
      <img src={logo} alt="logo" />

      <Form
        onSubmit={handleSubmit(userLogin)}
        justifyContent="space-between"
        height="470px"
      >
        <Title font="var(--title1)">Login</Title>

        <InputStyled>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" {...register("email")} />

          <label htmlFor="password">Email</label>
          <input type="password" id="password" placeholder="Digite sua senha" {...register("password")} />
        </InputStyled>

        <Button
          type="submit"
          backgroundColor="var(--color-primary)"
          backgroundColorHover="var(--color-primary-focus)"
        >
          Entrar
        </Button>

        <Span marginTop="30px">Ainda não possui conta?</Span>
        <Button
          type="button"
          backgroundColor="var(--gray-1)"
          backgroundColorHover="var(--gray-2)"
          onClick={() => navigateToRegister()}
        >
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
