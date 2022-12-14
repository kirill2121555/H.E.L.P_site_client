import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Comment from '../../elements/Comment/Comment';
import { fetchOneDevice, getCommentss, getmark, grade, postComment } from '../../http/feth'
import like from './../../../img/like.png'
import dislike from './../../../img/dislike.png'
import likeactiv from './../../../img/likeactive.png'
import dislikeactive from './../../../img/dislikeactive.png'
import { Context } from '../../..';
import styles from './../../cssstyles/Header.module.css'
import Qrcode from '../../elements/qrcode';
import Share from '../../elements/share';

const FullPostPHH = (props) => {
     const { id } = useParams()
     const [devise, setDevise] = useState([])
     const [comment, setComment] = useState()
     const [comments, setComments] = useState()
     const [mark, setMark] = useState('')
     const [qr, setQr] = useState()
     const user = useContext(Context)
     const typepost = 'pointHelp'

     useEffect(() => {
          fetchOneDevice(id).then(data => {
               setDevise(data[0])
               setQr(data[1])
          })
          getCommentss(id,typepost).then(data => setComments(data))
          getmark(id).then(data => setMark(data))
     }, [])

     const addComment = async () => {
          const data = new Date()
          await postComment(id, comment, data, typepost)
          setComment('')
          window.location.reload()
     }


     const marklike = async () => {
          if (user.user.isAuth) {
               await grade(id, 'like')
               window.location.reload()
          }
          else (alert('Чтобы оценить пост ввойдите в свой аккаунт'))
     }
     const markdislike = async () => {
          if (user.user.isAuth) {
               await grade(id, 'dislike')
               window.location.reload()
          }
          else (alert('Чтобы оценить пост ввойдите в свой аккаунт'))
     }

     return (
          <div>
               <div class="card">
                    <div class="card-header">
                         <div className='posts'>
                              <div className='item1'>
                                   <h2> {devise.name}<h6>{devise.description}</h6></h2>
                              </div>
                              <div className='item2'>
                                   <Share props={[window.location.href, qr]} />
                              </div>
                         </div>
                    </div>
                    <div class="card-body">
                         <h6 class="card-title">Виды помощи: {devise.listThings}</h6>
                         <p class="clipp">О нас: {devise.description}</p>
                         <p><small>Email: {devise.email}</small></p>
                         <p><small>Телефое: {devise.phone} {devise.nameBoss}  </small></p>
                         <p><small>Адрес: {devise.city} {devise.address} </small></p>
                         {user.user.isAuth
                              ?
                              <NavLink to={'/chat/' + devise.autorid}><button type="button" class="btn btn-primary">Написать</button></NavLink>
                              :
                              <button type="button" class="btn btn-primary">Чтобы написать пользователю нужно заригистирироваться</button>
                         }
                    </div>

               </div><br></br>
               <p><small>Просмотры: {devise.views}</small></p>
               <p>
                    {mark === 'like'
                         ?
                         <p> <img className='p' src={likeactiv} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                              <img className='p' src={dislike} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                         :
                         mark === 'dislike'
                              ?
                              <p>  <img className='p' src={like} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                                   <img className='p' src={dislikeactive} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                              :
                              <p> <img className='p' src={like} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                                   <img className='p' src={dislike} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                    }
               </p>
               {user.user.isAuth
                    ?
                    <div>
                         Оставить коммент:
                         <input type="email" class="form-control" id="exampleFormControlInput1"
                              value={comment}
                              onChange={e => setComment(e.target.value)}
                         ></input>
                         <button class="btn btn-primary me-md-2" type="button" onClick={addComment}>Добавить коммент</button>
                         <br></br>
                    </div>
                    :
                    ' '
               }
               {comments?.map(comment => <Comment comment={comment} />)}
          </div>

     );
}

export default FullPostPHH