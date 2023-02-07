import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form';
import { useContext } from "react";
import { IUpadateTech, UserContext } from "../../Providers/user";


const schema = yup.object({
  name: yup.string(),
  status: yup.string().required(),
})

const FormUpdateTech = ()=>{
  const {closeModalUpdate, getEvent, updateTech, titleTech} = useContext(UserContext)
  const {register, handleSubmit, formState:{errors}} = useForm<IUpadateTech>({
      resolver: yupResolver(schema)
  });

  return(
    <div>
      <div className="titleTech">
        <h2>Tecnologia Detalhes</h2>
        <button onClick={()=>closeModalUpdate()}>X</button>
      </div>
      <form onSubmit={handleSubmit(updateTech)}>
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
          <button type='submit' id='updateTech' onClick={(event:any)=>getEvent(event.currentTarget.id)}>Salvar Alterações</button>
          <button type='submit' id='deleteTech' onClick={(event:any)=>getEvent(event.currentTarget.id)}>Excluir</button>
        </div>
      </form>
  </div>
  )

}

export default FormUpdateTech;