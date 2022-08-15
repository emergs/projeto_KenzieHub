import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Main from './styles';

const Dashboard = ({user, setUser}) => {
  const navigate = useNavigate()
  
  const onClick = ()=>{
    navigate('../Login', {replace:true})
    localStorage.removeItem('@kenzieHubTOKEN')
    localStorage.removeItem('@kenzieHubUSERID')
    setUser('')
  }

  return (
    <Main>
      <div className='navbar'>
        <Header onClick={onClick}/>
      </div>
      <header>
        <h1>Olá, {user.name}</h1>
        <span>{user.course_module}</span>
      </header>
      <section className='main'>
        <h2>Que pena estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </section>
    </Main>
  );
};

export default Dashboard;
