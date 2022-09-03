import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import { Generalchat, getDialog } from '../http/feth';
import socket from './socket';

const Chat = () => {
    const { id } = useParams()
    const { user } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [img, setImg] = useState('null')

    useEffect(() => {
        if (id === '631208e955043417760dbafc') {
            Generalchat().then(data => {
                setMessages(data)
            })
        }
        else {
            getDialog(id).then(data => {
                setMessages(data)
            })
        }

        socket.on('message', function (data) {
            const message = JSON.parse(data)
            setMessages(prev => [message, ...prev])
        });

        socket.on('newImg', async (data) => {
            const message = JSON.parse(data)
            setMessages(prev => [message, ...prev])
        });
    }, []);

    const sendmessage = () => {
        socket.emit('message',
            {
                message: value,
                username: user.nick,
                to: id,
                i: user.id
            }
        )
        setValue('')
    }

    const sendpict = () => {
        const file = img;
        const reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            socket.emit('img',
                {
                    message: reader.result,
                    username: user.nick,
                    to: id,
                    i: user.id
                });
            setValue('')
            setImg('')
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={sendmessage}>Отправить</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ...
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#voise">Голосовое сообщение</a></li>
                            <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#pictures">Отправить катринку </a></li>
                        </ul>
                    </div>
                </div>

                <div className='ooo'>
                    <div >
                        {messages.map(mess =>
                            <div key={mess.id}>
                                <div className="message">
                                    {mess.username}. {((mess.message || '').startsWith('data:image/'))
                                        ?
                                        <img className='pictu' src={mess.message} alt='picture'></img>
                                        :
                                        mess.message
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div class="modal fade" id="voise" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Голосовое сообщение</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Функция в разработке
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="pictures" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Отправить катринку</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <label for="formFileLg" class="form-label">Выберите картинку</label>
                                <input class="form-control" type="file" id="formFile" onChange={e => setImg(e.target.files[0])}></input>
                                <br></br>
                                <button class="btn btn-primary" onClick={sendpict} data-bs-dismiss="modal">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;









