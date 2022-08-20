import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";
import Container from "../../components/Container/styles";
import FormCreateTech from "../../components/FormCreateTech";
import FormUpdateTech from "../../components/FormUpdateTech";

const RoutesMain = ({user, setUser }) => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login setUser={setUser}/>} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/dashboard"} element={<Dashboard user={user} setUser={setUser} />} >
        <Route path={"/dashboard/createTech"} element={<FormCreateTech/>}/>
        <Route path={"/dashboard/updateTech"} element={<FormUpdateTech/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RoutesMain;