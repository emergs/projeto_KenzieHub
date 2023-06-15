import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Form from "../../components/Form";
import { Span } from "../Login/style";
import { IUserRegister, UserContext } from "../../Providers/user";
import { useContext } from "react";
import HeaderRegister from "../../components/HeaderRegister";
import InputStyled from "../../components/Input/styles";
import { SelectInputStyled } from "../../components/SelectInput/styles";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container flexDirection="column" height="100%">
      <HeaderRegister backToLogin={backToLogin} />
      <Form onSubmit={handleSubmit(registerUser)} marginBottom="50px">
        <Title font="var(--title2)">Crie sua conta</Title>
        <Span>Rápido e grátis, vamos nessa</Span>

        <InputStyled>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

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

          <label htmlFor="confirm_password">Confirme sua senha</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirme sua senha"
            {...register("confirm_password")}
          />
          <p>{errors.confirm_password?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Digite sua bio"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Digite seu contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
        </InputStyled>

        <SelectInputStyled>
          <label htmlFor="module">Módulo</label>
          <select id="module" {...register("course_module")}>
            <option value="primeiroModule">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="segundoModule">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="terceiroModule">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="quartoModule">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <p>{errors.course_module?.message}</p>
        </SelectInputStyled>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
