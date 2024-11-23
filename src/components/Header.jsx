import React from 'react';
import "../style/header.scss";
import Logo from "../assets/logo-white.jpeg"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate= useNavigate()
    const onLogout=()=>{
      navigate("/")
    }
  return (
    <header className="admin-header">
    <div className="logo">
        <img src={Logo} alt="Logo" />
    </div>
    <button className="logout-button" onClick={onLogout}>
      Logout
    </button>
  </header>
  )
}

export default Header
