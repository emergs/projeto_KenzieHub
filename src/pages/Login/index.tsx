import Form from "../../components/Form/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Span, ButtonPrimary, ButtonGray } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { IUserLogin } from "../../Providers/user";
import Container from "../../components/Container2";
import Title from "../../components/Title2";

const schema = yup.object({
  email: yup
    .string()
    .required("Digite o email")
    .email("Digite um email válido"),
  password: yup.string().required("Digite a sua senha"),
});

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const onClick = () => {
    navigate("../register", { replace: true });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(userLogin)}>
        <Title font="var(--title2)">Login</Title>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="pass">Senha</label>
        <input
          type="password"
          id="pass"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <ButtonPrimary type="submit">Entrar</ButtonPrimary>

        <Span>Ainda não possui conta?</Span>
        <ButtonGray type="button" onClick={() => onClick()}>
          Cadastre-se
        </ButtonGray>
      </Form>
    </Container>
  );
};

export default Login;
