import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../Providers/user';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/Header';
import Button from '../../components/Button/styles';
import Form from '../../components/Form';
import api from '../../services/api';
import {Main, ContainerModal} from './styles';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

const schema = yup.object({
  title: yup.string().required(),
  status: yup.string().required(),
})

Modal.setAppElement('#root');

const Dashboard = () => {
  const navigate = useNavigate()
  const {user, setUser, idTech, setIdTech, setTitleTech, titleTech, loading, setLoading} = useContext(UserContext)
  const [modalCreateIsOpen, setCreateIsOpen] = useState(false);
  const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);
  const [event, setEvent] = useState()
  const {setCount, count} = useContext(UserContext)
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

  function openModalCreate() {
    setCreateIsOpen(true);
  }

  function openModalUpdate() {
    setUpdateIsOpen(true);
  }

  function closeModalCreate() {
    setCreateIsOpen(false);
  }

  function closeModalUpdate() {
    setUpdateIsOpen(false);
  }


  const onClick = ()=>{
    navigate('../Login', {replace:true})
    localStorage.removeItem('@kenzieHubTOKEN')
    localStorage.removeItem('@kenzieHubUSERID')
    setUser('')
  }

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

  if(loading) return <div>Carregando...</div>

  return (
    user ?
    <Main>
      <div className='navbar'>
        <Header onClick={onClick}/>
      </div>
      <header>
        <div>
          <h1>Olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </div>
      </header>
      <section className='main'>
        <div className='divTitleTechs'>
          <h2>Tecnologias</h2>
          <button onClick={openModalCreate}>+</button>
        </div>
        <ul>
          {
            user?.techs.map((elem,index)=>{
              return <li key={index} onClick={()=>{
                openModalUpdate() 
                setIdTech(elem.id, setTitleTech(elem.title))
              }}>
                  <span>{elem.title}</span>
                  <span>{elem.status}</span>
              </li>
            })
          }
        </ul>
      </section>
      
    <div>
      <Modal
        isOpen={modalCreateIsOpen}
        onRequestClose={closeModalCreate}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContainerModal>
          <div className='titleTech'>
            <h2>Cadastrar Tecnologia</h2>
            <button onClick={closeModalCreate}>X</button>
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
        </ContainerModal>
      </Modal>
      <Modal
        isOpen={modalUpdateIsOpen}
        onRequestClose={closeModalUpdate}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContainerModal>
          <div className="titleTech">
            <h2>Tecnologia Detalhes</h2>
            <button onClick={closeModalUpdate}>X</button>
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
        </ContainerModal>
      </Modal>
    </div>
     
    </Main>
    :
    <Navigate to='/login' replace />
  );
};

export default Dashboard;
