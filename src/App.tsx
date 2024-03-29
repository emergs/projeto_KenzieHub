import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes/RoutesMain";
import Global from "./styles/global";

const App = () => {

  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
