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

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Tecnologia Detalhes" btnClose={closeModalUpdate} />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(updateTech)} height="292px">
          <Input
            label="Nome da tecnologia"
            name="name"
            type="text"
            value={titleTech}
          />
          <SelectInput label="Status" name="status" options={skillTech} />

          <Container backgroundColor="inherit" gap="20px">
            <Button
              width="204px"
              type="submit"
              id="updateTech"
              onClick={(event) => getEvent(event.currentTarget.id)}
            >
              Salvar Alterações
            </Button>
            <Button
              width="98px"
              type="submit"
              id="deleteTech"
              backgroundColor="var(--gray-1)"
              backgroundColorHover="var(--gray-2)"
              onClick={(event) => getEvent(event.currentTarget.id)}
            >
              Excluir
            </Button>
          </Container>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default FormUpdateTech;
