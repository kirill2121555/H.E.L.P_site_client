import React, { useState } from "react";
import s from './Header.module.css'
import { check, login } from './../http/userApi'
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const click = async () => {
    try {
      await login(email, password);
      await check()
      navigate("/gum");
      window.location.reload()
    } catch (e) {
      console.log('error')
    }
  }

  return <div className="center">
    <div className={s.page}>
      <div className={s.head}>
        <div className="message">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Ведите email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Ведите пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
          </form>
          <button type="submit" class="btn btn-primary" onClick={click}>Войти</button>
          <br></br>
          <a href="recoveryPassword">Забыли пароль?</a>
          <br></br>
          Ещё нет аккаунта?<a href="registration">Зарегистрируйтесь</a>
        </div>
      </div>
    </div>
  </div>
})

export default Login