import React, { useContext, useEffect } from 'react'
import './App.css';
import AppRouter from './components/route/AppRouter';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './components/http/userApi';
import { Spinner } from "react-bootstrap";
import Navbar from './components/elements/Navbar/Navbar';
import Footer from './components/elements/Navbar/Footer';


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      user.setNick(data.nick)
      user.setUserId(data.id)
      user.setRole(data.role)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className='height'> <AppRouter className='height' /></div>
      <Footer />
    </div>
  );
}
)
export default App;
