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

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
});

const FormCreateTech = () => {
  const { addCount, closeModalCreate, createTech } = useContext(UserContext);

  const methodsCreateTech = useForm<ICreateTech>({
    resolver: yupResolver(schema),
  });

  return (
    <Container width="370px" height="324px" flexDirection="column">
      <HeaderModal title="Cadastrar Tecnologia" btnClose={closeModalCreate} />
      <FormProvider {...methodsCreateTech}>
        <Form onSubmit={methodsCreateTech.handleSubmit(createTech)}>
          <Input
            type="text"
            name="techName"
            placeholder="Nome da Tecnologia"
            label="Nome"
          />

          <SelectInput
            label="Selecionar status"
            name="status"
            options={skillTech}
          />

          <Button
            type="submit"
            backgroundColor="var(--color-primary)"
            backgroundColorHover="var(--color-primary-focus)"
          >
            Cadastrar Tecnologia
          </Button>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default FormCreateTech;
