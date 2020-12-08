import React from 'react'
import {Link} from 'react-router-dom'

function ChatList({id, company, img, username}) {
    return (
        <article>
            <Link to={({
                pathname : '/Chat',
                state : {id, img, username}
            })}>
                <img src={img} alt="프로필 사진" width="50" height="50"/>
                <h3>{username}</h3>
                <p>{company.catchPhrase}</p>
                <span>17:33</span>
            </Link>
        </article>
    )
}

export default ChatList