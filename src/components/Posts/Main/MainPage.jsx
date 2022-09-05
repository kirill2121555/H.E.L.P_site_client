import { useState } from 'react';
import { React, useEffect } from 'react';
import { getblogpost, getposts } from '../../http/feth';
import BlogPost from '../Blog/BlogPost';
import ListBP from '../Blog/ListBP';
import CanHelpPost from '../CanHelp/ListCH';
import ListNH from '../NeedHelp/ListNH';
import ListPHH from '../PostHumHelp/ListPHH';

const MainPage = () => {

    const [nhpost, setnhpost] = useState([])
    const [chpost, setchpost] = useState([])
    const [hppost, sethppost] = useState([])
    const [blogpost, setblogpost] = useState([])


    useEffect(() => {
        getblogpost()
            .then(
                data => {
                    setblogpost(data)
                    console.log('aaaa =', data)
                }
            )
        getposts()
            .then(
                data => {
                    setnhpost(data[2])
                    setchpost(data[1])
                    sethppost(data[0])
                }

            )

    }, [])

    return (
        <div>
            Последние посты
            <ListPHH
                posts={hppost}
            />
            <ListNH
                posts={nhpost}
            />
            <CanHelpPost
                posts={chpost}
            />
            <ListBP
                posts={blogpost}
            />
        </div>
    )
}

export default MainPage