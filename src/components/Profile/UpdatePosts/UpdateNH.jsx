import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchOneNeedHelp, updatepost, } from '../../http/feth';

const UpdateNH = (props) => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [listThings, setlistThings] = useState('')
    const [secondName, setsecondName] = useState('')

    useEffect(() => {
        fetchOneNeedHelp(id).then(
            data => {
                setName(data.name)
                setCity(data.city)
                setDescription(data.description)
                setPhone(data.phone)
                setlistThings(data.listThings)
                setsecondName(data.secondName)
            })
    }, [])

    const update =  (id,name, phone, description, listThings, city, secondName) => {
        updatepost( id,name, phone, description, listThings, city, secondName)
    }

    return (
        <div className='brd'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Мне нужно</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Город где вы проживаете</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={city}
                    onChange={e => setCity(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Подробное описание что вам нужно </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваше имя</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={secondName}
                    onChange={e => setsecondName(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваш номер телефона</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Адрес электороной почты</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={listThings}
                    onChange={e => setlistThings(e.target.value)}>
                </input>
            </div>
            <NavLink to={'/profil'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={update}>Cохранить</button>
                </div>
            </NavLink>
        </div>
    );
}
export default UpdateNH