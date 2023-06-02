import Container from "./script";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IUpadateTech, UserContext } from "../../Providers/user";
import { FormTech } from "../FormCreateTech/script";
import Button from "../Button2";

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
    <Container>
      <div className="titleTech">
        <h2>Tecnologia Detalhes</h2>
        <button onClick={() => closeModalUpdate()}>X</button>
      </div>
      <FormTech onSubmit={handleSubmit(updateTech)}>
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
      </FormTech>
    </Container>
  );
};

export default FormUpdateTech;
