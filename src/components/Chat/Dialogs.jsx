import React, { useEffect, useState } from 'react';
import Dialog from './Dialog';
import { allDialogs, Generalchat, generalchatinformation } from '../http/feth';

const Dialogs = () => {
    const [posts, setPosts] = useState([])
    const [generatchat, setGeneralChat] = useState({})

    useEffect(() => {
        allDialogs().then(data => {
            setPosts(data)
        })
        generalchatinformation().then(data => {
            setGeneralChat(data)
        })

    }, []);

    return (
        <div className="center">
            <div>
                <h2 className='centerlabel'>Общий чат</h2>
                <div>
                    <Dialog dialog={generatchat} />
                </div>
                <br></br>
                <div>
                    {posts.length === 0
                        ?
                        <h1>У вас еще нет личных диалогов</h1>
                        :
                        <div>
                            <h2 className='centerlabel'>Личные чаты</h2>
                            {posts.map(dialog => <Dialog dialog={dialog} />)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dialogs;