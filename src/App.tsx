import { ToastContainer } from 'react-toastify';
import RoutesMain from './routes/RoutesMain';
import Global from './styles/global';
import './App.css';

function App() {

  return (
    <div className="App">
      <Global/>
      <RoutesMain/>
      <ToastContainer/>
    </div>
  );
}

export default App;
