import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes/RoutesMain";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
