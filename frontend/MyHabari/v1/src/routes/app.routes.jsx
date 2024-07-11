import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoginPage from '../pages/UsersManagement/login.page';
import UserRegister from '../pages/UsersManagement/register.page';
import HomePage from '../pages/home.page';
import FogotPage from '../pages/UsersManagement/fogot.page';
import NotFoundPage from '../pages/NotfoundPage';
function AppRoutes() {
  
  const isAuthenticated = Cookies.get('MH_TKN') !== undefined;

  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/fogot" element={<FogotPage />} />
          <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
    </Router>
  )
}

export default AppRoutes
