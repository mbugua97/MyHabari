import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import LoginPage from "../pages/UsersManagement/login.page";
import UserRegister from "../pages/UsersManagement/register.page";
import HomePage from "../pages/home.page";
import FogotPage from "../pages/UsersManagement/fogot.page";
import NotFoundPage from "../pages/NotfoundPage";
import IndexPage from "../pages/MyHabari.indexpage";

function AppRoutes() {
  const hasToken = Cookies.get("MH_TKN") !== undefined;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={hasToken ? <Navigate to="/home" replace />:<IndexPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/fogot" element={<FogotPage />} />
          <Route path="/home" element={hasToken ? <HomePage />: <Navigate to="/" replace/>}
          />
          <Route path="*" element={<LoginPage  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
