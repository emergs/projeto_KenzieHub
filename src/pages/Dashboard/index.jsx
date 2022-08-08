import { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios';

const Dashboard = () => {

  const [request, setRequest] = useState([])

  useEffect(()=>{
    api.get('/users')
    .then((response)=>{
      setRequest(response.data) 
    })
    .catch((err)=>console.log(err))
  },[])

  console.log(request)

  return (
    <ul>
      {request?.map((elem) => {
        return <li>{elem.name}</li>;
      })}
    </ul>
  );
};

export default Dashboard;
