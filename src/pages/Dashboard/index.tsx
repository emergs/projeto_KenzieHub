import { Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import {Main} from './styles';
import ModalUpdateTech from '../../components/ModalUpdateTech';
import ModalCreateTech from '../../components/ModalCreateTech';
import { UserContext } from '../../Providers/user';

Modal.setAppElement('#root');

const Dashboard = () => {
  const {user, deleteUserStorage, openModalCreate, openModalUpdate, getIdTech, loading} = useContext(UserContext)
  console.log(user);
  
  if(loading)return <div>Carregando...</div>

  return (
    user ?
    <Main>
      <div className='navbar'>
        <Header onClick={deleteUserStorage}/>
      </div>
      <header>
        <div>
          <h1>Olá, {user?.name}</h1>
          <span>{user?.course_module}</span>
        </div>
      </header>
      <section className='main'>
        <div className='divTitleTechs'>
          <h2>Tecnologias</h2>
          <button onClick={openModalCreate} type='button'>+</button>
        </div>
        <ul>
          {
            user?.techs.map((elem,index)=>{
              return <li key={index} onClick={()=>{
                openModalUpdate() 
                getIdTech(elem.id,elem.title)
              }}>
                  <span>{elem.title}</span>
                  <span>{elem.status}</span>
              </li>
            })
          }
        </ul>
      </section>
      <div>
        <ModalUpdateTech/>
        <ModalCreateTech/>
      </div>
    </Main>
    :
    <Navigate to='/login' replace />
    
  );
};

export default Dashboard;
