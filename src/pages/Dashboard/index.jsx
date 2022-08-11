import { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios';
import Header from '../../components/Header';
import Main from './styles';

const Dashboard = () => {

  // const [request, setRequest] = useState([])

  // useEffect(()=>{
  //   api.get('/users')
  //   .then((response)=>{
  //     setRequest(response.data) 
  //   })
  //   .catch((err)=>console.log(err))
  // },[])

  // console.log(request)

  return (
    <Main>
      <div className='navbar'>
        <Header/>
      </div>
      <header>
        <h1>`Olá,${}`</h1>
        <span>kkkkk{}</span>
      </header>
      <section className='main'>
        <h2>Que pena estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </section>
    </Main>
      
    
    
    // <ul>
    //   {request?.map((elem) => {
    //     return <li>{elem.name}</li>;
    //   })}
    // </ul>
  );
};

export default Dashboard;
