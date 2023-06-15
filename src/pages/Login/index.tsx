import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Span } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { IUserLogin } from "../../Providers/user";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Form from "../../components/Form";
import logo from "../../assets/Logo.svg";
import InputStyled from "../../components/Input/styles";

const schema = yup.object({
  email: yup
    .string()
    .required("Digite o email")
    .email("Digite um email válido"),
  password: yup.string().required("Digite a sua senha"),
});

const Login = () => {
  const { userLogin, navigateToRegister } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserLogin>({
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
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
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
