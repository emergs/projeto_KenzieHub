import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";

const RoutesMain = ({ request }) => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/dashboard"} element={<Dashboard request={request} />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default RoutesMain;