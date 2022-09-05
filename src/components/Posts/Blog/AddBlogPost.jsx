import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { $authHost } from "../../http";
import { addAsistant, blogpost, newblogpost, newBlogPost } from "../../http/feth";
import g from './../../cssstyles/module.css'
const moment = require('moment')

const AddBlogPost = (props) => {

    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('null')

    const click = async () => {
        try {
            const namefile = ((moment().format('DDMMYYYY-HHmmss_SSS') + '.png'))
            /*const data = new FormData();
            data.append('picture', img, namefile);
            await $authHost.post('/api/upload', data, {
                headers: {
                    'content-type': 'mulpipart/form-data'
                }
            })*/
                await newblogpost(title, text, namefile)
        } catch (error) {
            console.log('erorr')
        }
    }

    return (
        <div className='brd'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Название</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={title}
                    onChange={e => setTitle(e.target.value)}></input>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Текст статьи</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                    value={text}
                    onChange={e => setText(e.target.value)}></textarea>
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Добавте фото</label>
                <input class="form-control" type="file" id="formFile" onChange={e => setImg(e.target.files[0])}></input>


                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple></input>

            </div>
            <NavLink to={'/cha'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={click}>Добавить</button>
                </div>
            </NavLink>
        </div>
    );
}
export default AddBlogPost