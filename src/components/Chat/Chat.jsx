import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import { getDialog } from '../http/feth';
import socket from './socket';

const Chat = () => {
    const { id } = useParams()
    const { user } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    useEffect(() => {
       getDialog(id).then(data=>setMessages(data))

        socket.on('message', function (data) {
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

    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={sendmessage}>Отправить</button>
                </div>
                <div className='ooo'>
                    <div >
                        {messages.map(mess =>
                            <div key={mess.id}>
                                <div className="message">
                                    {mess.username}. {mess.message}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;









