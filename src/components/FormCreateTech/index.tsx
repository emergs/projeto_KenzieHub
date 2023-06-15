import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ICreateTech, UserContext } from "../../Providers/user";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Form from "../Form";
import Container from "../Container";
import HeaderModal from "../HeaderModal";
import InputStyled from "../Input/styles";
import { SelectInputStyled } from "../SelectInput/styles";

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
});

const FormCreateTech = () => {
  const { closeModalCreate, createTech } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICreateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Cadastrar Tecnologia" btnClose={closeModalCreate} />
      <Form onSubmit={handleSubmit(createTech)}>
        <InputStyled>
          <label htmlFor="techName">Nome da tecnologia</label>
          <input
            type="text"
            id="techName"
            placeholder="Nome da Tecnologia"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </InputStyled>

        <SelectInputStyled>
          <label htmlFor="status">Status</label>
          <select {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>
        </SelectInputStyled>

        <Button
          type="submit"
          backgroundColor="var(--color-primary)"
          backgroundColorHover="var(--color-primary-focus)"
        >
          Cadastrar Tecnologia
        </Button>
      </Form>
    </Container>
  );
};

export default FormCreateTech;
