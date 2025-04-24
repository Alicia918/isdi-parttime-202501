//import { useState, useEffect } from "react"
//import logics from "../../../new-app-react-vite/src/logic/index"
//import Header from "./components/Header"
//import { Routes, Route, useLocation, useNavigate } from "react-router"
//import isUserLoggedIn from "../../../new-app-react-vite/src/logic/users/isUserLoggedIn"
//import Private from "./pages/Private"
//import Public from "./pages/Public"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home';



const App = () => {
    return (
        <Routes>
          {/* Ruta principal que muestra Landing */}
          <Route path="/" element={<Landing />} />
          {/* Otras rutas */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      );

 
}

export default App



/*   const [refreshHeader, setRefreshHeader] = useState(Date.now())
    const [isUserLogged, setIsUserLogged] = useState(logics.users.isUserLoggedIn())
    const location = useLocation()
    const navigate = useNavigate()

    const onLogoutClick = () => {
        logics.users.logoutUser()
        setIsUserLogged(logics.users.isUserLoggedIn())
        setRefreshHeader(Date.now())
        navigate("/")
    }

    useEffect(() => {
        setIsUserLogged(logics.users.isUserLoggedIn())
    }, [location.pathname])

    return <>
        <Header
            isUserLogged={isUserLogged}
            refreshHeader={refreshHeader}
            logout={onLogoutClick}
        />
      {isUserLoggedIn() ? <Private setRefreshHeader={setRefreshHeader} /> : <Public setRefreshHeader={setRefreshHeader} />}
    </>*/