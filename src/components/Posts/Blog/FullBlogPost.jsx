import React, { useContext, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { getCommentss, OneBlogPost, postComment } from '../../http/feth'

import { Context } from '../../..';
import Comment from '../../elements/Comment/Comment';


const FullBlogPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])
    const [comment, setComment] = useState()
    const [comments, setComments] = useState()
    const typepost='blogpost'

    const user = useContext(Context)

    useEffect(() => {
        OneBlogPost(id).then(data => {
            setPost(data)
        })
        getCommentss(id,typepost).then(data => setComments(data))

    }, [])

    const addComment = async () => {
        const data = new Date()
        await postComment(id, comment, data,typepost)
        setComment('')
        window.location.reload()
   }

    return (
        <div>
            <div className="card" >
                <h2 className="card-header">{post.title}</h2>
                <div className="card-body">
                    <p className="clip">{post.text}</p>
                    <p><small>Дата: {post.datacreate}</small></p>
                </div>
            </div>
            <br></br>

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

export default FullBlogPost