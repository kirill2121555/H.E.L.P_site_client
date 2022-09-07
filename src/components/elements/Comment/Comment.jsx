import React, { useEffect } from 'react';
import { useState } from 'react';
import { sendAnswer } from '../../http/feth';

const Comment = ({ comment, po }) => {
    const [answer, setAnswer] = useState()
    const [idcom, setIdcom] = useState()
    const [ccomment, setCcomment] = useState()

    useEffect(() => {
        if (po === undefined) {
            setIdcom(comment[0]._id)
        }
    }, []);

    const SendANS = () => {
        sendAnswer(idcom, ccomment)
        setAnswer('')
        window.location.reload()
    }

    return (
        <div>
            <div>
                {po === undefined
                    ?
                    <div>
                        <br></br>
                        <div class="card">
                            <div>
                                <h2 class="card-header">
                                    {comment[0].usernick}<h6><small>{comment[0].timeOfCreation.replace(/[a-zа-яё]/gi, ' ').substr(0, comment[0].timeOfCreation.length - 8)}</small></h6></h2>
                                <div class="card-body">
                                    <h4 class="card-title">{comment[0].text}</h4>
                                </div>
                                <div class="accordion">
                                    <div class="tab">
                                        <input type="checkbox" id={comment[0]._id} name="tab-group"></input>
                                        <label for={comment[0]._id} class='btn btn-primary' >Ответить</label>
                                        <section class="tab-content">
                                            <textarea className='textar'
                                                value={ccomment}
                                                onChange={e => setCcomment(e.target.value)}
                                            ></textarea>
                                            <br></br>
                                            <button class="btn btn-primary me-md-2" type="button" onClick={SendANS}>Отправить</button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='ansver'>
                            <h2 class="card-header">
                                {comment.usernick} <h6><small>{comment.timeOfCreation.replace(/[a-zа-яё]/gi, ' ').substr(0, comment.timeOfCreation.length - 8)}</small></h6></h2>
                            <div class="card-body">
                                <h4 class="card-title">{comment.text}</h4>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                comment[1]?.length > 0
                    ?
                    comment[1]?.map(comment => <Comment comment={comment} po={'childen'} />)
                    :
                    ''
            }
        </div >
    );
}

export default Comment


