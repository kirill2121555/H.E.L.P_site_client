import React, { useState } from "react";
import s from './../cssstyles/Headerr.module.css'/////////////////////////////////////////////
import { observer } from "mobx-react-lite";
import { tryremovepassvord } from "../http/feth";

const RecoveryPassword = observer(() => {
  const [email, setEmail] = useState('')

  const click = async () => {
    try {
      alert('Перейлите на почту и подтвердите аккаунт')
      await tryremovepassvord(email);
    } catch (e) {
      console.log('error')
    }
  }

  return <header className={s.hea}>
    <div className={s.page}>
      <div className="message">
        <form>
          <div class="mb-3">
            <h3> <label for="exampleInputPassword1" class="form-label">Введите ваш email</label></h3>
            <input class="form-control" id="exampleInputPassword1"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
        </form>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={click}>Востановить пароль</button>
      </div>
    </div>
  </header>
})

export default RecoveryPassword