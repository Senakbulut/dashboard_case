import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { useState, useEffect } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('accessToken') !== null
  );

  useEffect(() => {
    localStorage.setItem('logged_user', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Dashboard/> : <Navigate to='/login'/>}
      />
      <Route path="/login" element={<Login isLogin = {setIsLoggedIn}/>} />
    </Routes>
  );
}

export default App;
