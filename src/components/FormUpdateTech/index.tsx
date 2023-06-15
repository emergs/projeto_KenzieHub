import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IUpadateTech, UserContext } from "../../Providers/user";
import Button from "../Button";
import Form from "../Form";
import Container from "../Container";
import HeaderModal from "../HeaderModal";
import InputStyled from "../Input/styles";
import { SelectInputStyled } from "../SelectInput/styles";

const schema = yup.object({
  name: yup.string(),
  status: yup.string().required(),
});

const FormUpdateTech = () => {
  const { closeModalUpdate, getEvent, updateTech, titleTech } =
    useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUpadateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Tecnologia Detalhes" btnClose={closeModalUpdate} />
      <Form onSubmit={handleSubmit(updateTech)} height="292px">
        <InputStyled>
          <label htmlFor="techName">Nome da tecnologia</label>
          <input type="text" value={titleTech} {...register("name")} disabled />
          <p>{errors.name?.message}</p>
        </InputStyled>
        <SelectInputStyled>
          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>
        </SelectInputStyled>

        <Container backgroundColor="inherit" gap="20px">
          <Button
            width="204px"
            type="submit"
            id="updateTech"
            onClick={(event: any) => getEvent(event.currentTarget.id)}
          >
            Salvar Alterações
          </Button>
          <Button
            width="98px"
            type="submit"
            id="deleteTech"
            backgroundColor="var(--gray-1)"
            backgroundColorHover="var(--gray-2)"
            onClick={(event: any) => getEvent(event.currentTarget.id)}
          >
            Excluir
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default FormUpdateTech;
