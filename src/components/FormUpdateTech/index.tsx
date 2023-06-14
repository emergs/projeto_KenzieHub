import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { IUpadateTech, UserContext } from "../../Providers/user";
import Button from "../Button2";
import Form from "../Form2";
import Container from "../Container2";
import HeaderModal from "../HeaderModal2";
import Input from "../Input2";
import SelectInput from "../SelectInput2";
import { skillTech } from "../../utils";
import InputStyled from "../Input2/styles";
import { SelectInputStyled } from "../SelectInput2/styles";

const schema = yup.object({
  name: yup.string(),
  status: yup.string().required(),
});

const FormUpdateTech = () => {
  const { closeModalUpdate, getEvent, updateTech, titleTech } =
    useContext(UserContext);

  const methods = useForm<IUpadateTech>({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, formState: { errors }, control } = methods

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Tecnologia Detalhes" btnClose={closeModalUpdate} />
      <Form onSubmit={handleSubmit(updateTech)} height="292px">
        <InputStyled>
          <label htmlFor="techName">Nome da tecnologia</label>
          <input type="text" value={titleTech} {...register("name")} disabled />
        </InputStyled>
        <SelectInputStyled>
          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </SelectInputStyled>

        <Container backgroundColor="inherit" gap="20px">
          <Button
            width="204px"
            type="submit"
            id="updateTech"
            onClick={(event) => console.log(event.currentTarget.id)}
          >
            Salvar Alterações
          </Button>
          <Button
            width="98px"
            type="submit"
            id="deleteTech"
            backgroundColor="var(--gray-1)"
            backgroundColorHover="var(--gray-2)"
            onClick={(event) => console.log(event.currentTarget.id)}
          >
            Excluir
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default FormUpdateTech;
