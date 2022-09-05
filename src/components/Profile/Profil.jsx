import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ListAssist from "./UserPost/UserListCH";
import ListNeedhelp from "./UserPost/UserListNH";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { getAP, getNHP } from "../http/feth";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import logo from './../../img/Logo.png'
import s from './../cssstyles/profil.css'


const Profil = observer(() => {
    const { user } = useContext(Context)

    const [loading, setLoading] = useState(true)
    const [persons, setPersons] = useState([])
    const [nhs, setnhs] = useState([])
    const [categor, setcategor] = useState(1)


    useEffect(() => {
        getAP().then(
            data => {
                setPersons(data)
            })
        getNHP().then(
            data => {
                setnhs(data)
                setLoading(false)
            }
        )
    }, [])



    if (loading) {
        return <Spinner animation={"grow"} />
    }
    return (
        <div>
            <div className='wrapper'>
                <div className='item1'>
                    <img className='pic' src={user.avatar} alt="Logo"></img>
                    <div>
                        Имя: {user.nick}
                        <br></br>
                        <NavLink to={'/setings'}><button class="btn btn-primary" type="button">Настройки профиля</button></NavLink>
                    </div>
                </div>
                <div className='item2'>
                    <br></br>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <NavLink to={'/addcanhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Могу помочь"</button></NavLink>
                    </div>
                    <br></br>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <NavLink to={'/addneedhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Нужна помошь"</button></NavLink>
                    </div>
                    <br></br>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <NavLink to={'/addblogpost'}><button class="btn btn-primary" type="button">Добавить статью в блог</button></NavLink>
                    </div>
                    <br></br>

                    {user.role === 'MODERATOR'
                        ?
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <NavLink to={'/addpointhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Пункт помощи"</button></NavLink>
                        </div>
                        :
                        ' '}
                </div>
            </div>
            <div className="center">
                <button class="btn btn-primary" onClick={() => { setcategor(1) }}> "Могу помочь"</button>
                <div>  </div>
                <button class="btn btn-primary" onClick={() => { setcategor(2) }}> "Нужна помошь"</button>
            </div>
            {categor === 1 ?
                <div>
                    {persons.length !== 0 ? <h3>Ваши посты в категории "Могу помочь"</h3> : <h1>У вас нет постов в категории "Могу помочь"</h1>}
                    <ul>
                        {persons.length === 0
                            ?
                            ''
                            :
                            (persons.map(person => <ListAssist person={person} />))
                        }
                    </ul>
                </div> :

                <div>
                    {nhs.length !== 0 ? <h3>Ваши посты в категории "Нужна помошь"</h3> : <h1>У вас нет постов в категории "Нужна помочь"</h1>}
                    <ul>
                        {nhs === 0
                            ?
                            ' '
                            :
                            (nhs.map(nh => <ListNeedhelp nh={nh} />))
                        }
                    </ul>
                </div>}
        </div>
    )
}
)

export default Profil