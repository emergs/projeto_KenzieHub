import * as yup from "yup";
import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ICreateTech, UserContext } from "../../Providers/user";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button2";
import Form from "../Form2";
import Container from "../Container2";
import Input from "../Input2";
import SelectInput from "../SelectInput2";
import { skillTech } from "../../utils";
import HeaderModal from "../HeaderModal2";
import InputStyled from "../Input2/styles";
import { SelectInputStyled } from "../SelectInput2/styles";

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
});

const FormCreateTech = () => {
  const { addCount, closeModalCreate, createTech } = useContext(UserContext);

  const { handleSubmit, register, formState: { errors }, control } = useForm<ICreateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Cadastrar Tecnologia" btnClose={closeModalCreate} />
      <Form onSubmit={handleSubmit(createTech)}>

        <InputStyled>
          <label htmlFor="techName">Nome da tecnologia</label>
          <input type="text" id="techName" placeholder="Nome da Tecnologia" {...register("title")} />
        </InputStyled>

        <SelectInputStyled>
          <label htmlFor="status">Status</label>
          <select {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
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
