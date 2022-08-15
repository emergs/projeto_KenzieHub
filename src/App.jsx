import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import RoutesMain from './routes/RoutesMain';
import Global from './styles/global';
import './App.css';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <Global/>
      <RoutesMain user={user} setUser={setUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
