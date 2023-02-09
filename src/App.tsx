import { ToastContainer } from 'react-toastify';
import RoutesMain from './routes/RoutesMain';
import "../src/styles/main.sass"

function App() {

  return (
    <div className="App">
      <RoutesMain/>
      <ToastContainer/>
    </div>
  );
}

export default App;
