import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IUpadateTech, UserContext } from "../../Providers/user";
import Button from "../Button2";
import Form from "../Form2";
import Container from "../Container2";
import HeaderModal from "../HeaderModal2";
import Input from "../Input2";

const schema = yup.object({
  name: yup.string(),
  status: yup.string().required(),
});

const FormUpdateTech = () => {
  const { closeModalUpdate, getEvent, updateTech, titleTech } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpadateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <Container width="370px" height="324px" flexDirection="column" gap="0px">
      <HeaderModal title="Tecnologia Detalhes" btnClose={closeModalUpdate} />
      <Form onSubmit={handleSubmit(updateTech)} height="292px">
        {/*<Input
          label="Nome do projeto"
          name="name"
          type="text"
          placeholder=" "
        />*/}
        <label>Nome do projeto</label>
        <input {...register("name")} value={titleTech} disabled />
        <p>{errors.name?.message}</p>

        <label>Status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="btnGroup">
          <Button
            type="submit"
            id="updateTech"
            onClick={(event) => getEvent(event.currentTarget.id)}
          >
            Salvar Alterações
          </Button>
          <Button
            type="submit"
            id="deleteTech"
            onClick={(event) => getEvent(event.currentTarget.id)}
          >
            Excluir
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormUpdateTech;
