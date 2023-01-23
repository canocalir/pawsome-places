import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Settings from "../views/Settings/Settings";

const AppRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  );
};

export default AppRoute;
