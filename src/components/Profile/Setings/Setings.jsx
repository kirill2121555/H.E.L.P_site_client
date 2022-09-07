import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import logo from './../../../img/avat.png'
import { Context } from "../../..";
import { changeEmail, changeNick, changePassword, ProfileInformation, changeavata } from "../../http/feth";
import { $authHost } from "../../http";
import s from './../../cssstyles/profil.css'

const moment = require('moment')


const Setings = (() => {
    const { user } = useContext(Context)
    const [info, setInfo] = useState([])
    const [nick, setNick] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordtwo, setPasswordtwo] = useState()
    const [img, setImg] = useState('null')

    const changNick = () => {
        changeNick(nick)
        window.location.reload()

    }
    const changEmail = () => {
        changeEmail(email)
        window.location.reload()
    }
    const changPassword = () => {
        changePassword(password, passwordtwo)
        window.location.reload()

    }

    useEffect(() => {
        ProfileInformation().then(data => setInfo(data))
    }, [])

    const changeavatar = async () => {
        try {
            const namefile = ((moment().format('DDMMYYYY-HHmmss_SSS') + '.png'))
            const data = new FormData();
            data.append('picture', img, namefile);
            await $authHost.post('/api/upload', data, {
                headers: {
                    'content-type': 'mulpipart/form-data'
                }
            })
                .then(await changeavata(namefile))
        } catch (error) {
            console.log('erorr')
        }
    }
    return (
        <div>
            <img className='pic' src={user.avatar} alt="Logo"></img>
            <br></br>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Изменить Аватар
            </button>
            <br></br>
            <div>
                Имя: {info.nick}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Изменить имя
                </button>
                <br></br>

                Email: {info.email}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Изменить Email
                </button>
                <br></br>
                ************
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                Изменить пароль
                </button>
                <br></br>
            </div>




            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Изменить аватарку</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Выберете новую аватарку
                            <div class="input-group mb-3">

                                <input class="form-control" type="file" id="formFile" onChange={e => setImg(e.target.files[0])}></input>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button class="btn btn-primary me-md-2" type="button" onClick={changeavatar}>Добавить</button>

                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Изиенить ник</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Введите новый ник: </label>
                            <input value={nick} onChange={e => setNick(e.target.value)} type="text" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={changNick}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>



            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Изменить Email</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Введите новый Email: </label>

                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={changEmail}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>




            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Изменить пароль</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Введите новый пароль: </label>
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                            <label>Введите новый пароль второй раз: </label>
                            <input type='password' value={passwordtwo} onChange={e => setPasswordtwo(e.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={changPassword}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
)

export default Setings