import React from "react";
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import logo from './../../../img/Logo.png'
import { Context } from "../../..";


const Navbar = observer(() => {

  const user = useContext(Context)

  return <nav className={s.nav}>
    {user.user.isAuth ? (
      <nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <img className={s.pi} src={logo} alt="Logo"></img>
        <a class="navbar-brand" ><NavLink to="main" className='nav-link'>Главнвя</NavLink></a>
        <a class="navbar-brand" ><NavLink to="gum" className='nav-link'>Пункты Гум Помощи</NavLink></a>
        <a class="navbar-brand" ><NavLink to="cha" className='nav-link'>Могу помочь</NavLink></a>
        <a class="navbar-brand" ><NavLink to="nha" className='nav-link'>Нужна помошь</NavLink></a>
        <a class="navbar-brand" ><NavLink to="chat" className='nav-link'>Чат</NavLink></a>
        <a class="navbar-brand" ><NavLink to="profil" className='nav-link'>Профиль</NavLink></a>
        <a class="navbar-brand" ><NavLink to="logout" className="nav-link">Выйти</NavLink></a>
      </nav>)
      :
      (<nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <img className={s.pi} src={logo} alt="Logo"></img>
        <a class="navbar-brand" ><NavLink to="main" className='nav-link'>Главнвя</NavLink></a>
        <a class="navbar-brand" ><NavLink to="gum" className='nav-link'>Пункты Гум Помощи</NavLink></a>
        <a class="navbar-brand" ><NavLink to="ch" className='nav-link'>Могу помочь</NavLink></a>
        <a class="navbar-brand" ><NavLink to="nh" className='nav-link'>Нужна помошь</NavLink></a>
        <a class="navbar-brand" ><NavLink to="login" className="nav-link">Вoйти</NavLink></a>
      </nav>)
    }
  </nav >
})


export default Navbar;