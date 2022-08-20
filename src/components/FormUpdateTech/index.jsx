import Container from "./script";
import Form from "../Form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form';
import api from "../../services/api";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/user";
import Button from "../Button/styles";
import BtnGroup from "./script";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string(),
  status: yup.string().required(),
})

const FormUpdateTech = ()=>{
  const {user, setUser, idTech, setIdTech, count, setCount, titleTech} = useContext(UserContext)
  const [event, setEvent] = useState()
  const navigate = useNavigate()
  const {register, handleSubmit, formState:{errors}} = useForm({
      resolver: yupResolver(schema)
  });

  const updateTech = async (data)=>{
    const up = {status:data.status}

    const token = JSON.parse(localStorage.getItem('@kenzieHubTOKEN'))

    if(event == 'updateTech'){
      
      try {
        api.defaults.headers.authorization = `Bearer ${token}`
        const {data} = await api.get('/profile')
        await api.put(`/users/techs/${idTech}`,up)
        setIdTech('')
        setCount(count+1)
      } 
      catch (error) {
        console.error(error);
      }
    }

    else{
      try {
        api.defaults.headers.authorization = `Bearer ${token}`
        await api.delete(`/users/techs/${idTech}`)
        setIdTech('')
        setCount(count+1)
      } 
      catch (error) {
        console.error(error);
      }
    }
  }

  return(
    <Container>
      <div className="titleTech">
        <h2>Tecnologia Detalhes</h2>
        <button onClick={()=>navigate('/dashboard',{replace : true})}>X</button>
      </div>
      <Form onSubmit={handleSubmit(updateTech)}>
        <label>Nome do projeto</label>
        <input  {...register("name")} value={titleTech} disabled/>
        <p>{errors.name?.message}</p>

        <label>Status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="btnGroup">
          <Button type='submit' id='updateTech' onClick={(e)=>setEvent(e.target.id)}>Salvar Alterações</Button>
          <Button gray1 type='submit' id='deleteTech' onClick={(e)=>setEvent(e.target.id)}>Excluir</Button>
        </div>
      </Form>
  </Container>
  )

}

export default FormUpdateTech;