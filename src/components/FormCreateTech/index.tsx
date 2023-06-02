import * as yup from 'yup';
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { UserContext } from "../../Providers/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormTech } from './script';
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Button from '../Button2';

interface ICreateTech {
  title: string,
  status: string
}

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
})

const FormCreateTech = () => {
  const { addCount, closeModalCreate } = useContext(UserContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateTech>({
    resolver: yupResolver(schema)
  });

  const createTech = async (data: ICreateTech): Promise<void> => {

    const token = JSON.parse(localStorage.getItem('@kenzieHubTOKEN') || '{}')
    if (token) {

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        await api.post('/users/techs', data)
        toast.success('Tecnologia criada com sucesso')
        addCount()
        closeModalCreate()
      }
      catch (error) {
        console.error(error);
        toast.error('Erro ao criar tecnologia')
      }
    }
  }

  return (
    <Container>
      <div>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={() => closeModalCreate()}>X</button>
      </div>
      <FormTech onSubmit={handleSubmit(createTech)}>
        <label>Nome</label>
        <input placeholder='Digite o nome da tecnologia ' {...register("title")} />
        <p>{errors.title?.message}</p>

        <label>Selecionar Status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
        <Button type='submit'>Cadastrar Tecnologia</Button>
      </FormTech>
    </Container>
  )

}

export default FormCreateTech;