import * as yup from 'yup';
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { UserContext } from "../../Providers/user";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/styles"
import Container from './script';
import Form from "../Form";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
})

const FormCreateTech = ()=>{
  const {setCount, count} = useContext(UserContext)
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const createTech = async (data)=>{
    
    const token = JSON.parse(localStorage.getItem('@kenzieHubTOKEN'))
    if(token){
      
      try {
        api.defaults.headers.authorization = `Bearer ${token}`
        await api.post('/users/techs',data)
        .then((response)=>setCount(count+1))
        .catch((err)=>console.log(err))
      } 
      catch (error) {
        console.error(error);
      }
    }
  }

  return(
    <Container>
      <div>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={()=>navigate('/dashboard',{replace : true})}>X</button>
      </div>
      <Form onSubmit={handleSubmit(createTech)}>
        <label>Nome</label>
        <input placeholder='Digite o nome da tecnologia ' {...register("title")}/>
        <p>{errors.title?.message}</p>

        <label>Selecionar Status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
        <Button colorPrimary type='submit'>Cadastrar Tecnologia</Button>
      </Form>
    </Container>
  )

}

export default FormCreateTech;