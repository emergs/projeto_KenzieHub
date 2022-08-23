import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'

export const UserContext = createContext();

const UserProvider =({children})=>{
  const [user, setUser] = useState('');
  const [idTech, setIdTech] = useState('');
  const [count, setCount] = useState(0)
  const [titleTech, setTitleTech] = useState('')
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  
  useEffect(()=>{

    const loadUser = async ()=>{
      const token = JSON.parse(localStorage.getItem('@kenzieHubTOKEN'))
      if(token){
        
        try {
          api.defaults.headers.authorization = `Bearer ${token}`
          const {data} = await api.get('/profile')
          setUser(data)
        } 
        catch (error) {
          console.error(error);
        }
      }
      setLoading(false)
    }

    loadUser()
  },[count])

  const onSubmit = async (data)=> {
    function validateLogin(){
      toast.success('Login realizado com sucesso')
      navigate('../dashboard', {replace:true})
      setUser(request.data.user)
      localStorage.setItem('@kenzieHubTOKEN', JSON.stringify(request.data.token))
      localStorage.setItem('@kenzieHubUSERID', JSON.stringify(request.data.user.id))
    }

    function doNotValidateLogin(){
      toast.error('Dados incorretos')
    }

    const request = await api.post('/sessions', data)
    request.status === 200 ? validateLogin() : doNotValidateLogin()
  }

  return(
    <UserContext.Provider value={{user, setUser, onSubmit, idTech, setIdTech, setCount, count, titleTech, setTitleTech, loading, setLoading}}>
      {children}
    </UserContext.Provider>
  )
}
 export default UserProvider;