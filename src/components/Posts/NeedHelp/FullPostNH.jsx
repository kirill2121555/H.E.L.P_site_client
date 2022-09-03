import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Context } from '../../..';
import Share from '../../elements/share';
import { fetchOneNeedHelp } from '../../http/feth'

const FullPostNH = (props) => {

    const user = useContext(Context)
    const { id } = useParams()
    const [devise, setDevise] = useState([])
    const [qr, setQr] = useState()

    useEffect(() => {
        fetchOneNeedHelp(id).then(data => {
            setDevise(data[0])
            setQr(data[1])
        })
    }, [])
    return (
        <div class="card">

            <div class="card-header">
                <div className='posts'>
                    <div className='item1'>
                        <h2>{devise.name}</h2>
                    </div>
                    <div className='item2'>
                        <Share props={[window.location.href, qr]} />
                    </div>
                </div>

            </div>
            <div class="card-body">

                <p class="clip">{devise.description}</p>
                <p><small>Телефое: {devise.phone} </small></p>
                <p><small>Город: {devise.city}</small></p>
                <p><small>Email: {devise.listThings}</small></p>

                {user.user.isAuth
                    ?
                    <NavLink to={'/chat/' + devise.autorid}><button type="button" class="btn btn-primary">Написать</button></NavLink>
                    :
                    <button type="button" class="btn btn-primary">Чтобы написать пользователю нужно заригистирироваться</button>
                }
            </div>
        </div>
    );
}

export default FullPostNH