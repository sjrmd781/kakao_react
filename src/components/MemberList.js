import React from 'react'
import {Link} from 'react-router-dom'

function MemberList({id, name, email, img, text, bg}) {
    return (
            <li>
                <img src={img} alt="프로필 이미지" width="40" height="40" />
                <Link to={({
                    pathname : '/Profile',
                    state : {id, name, email, img, bg}
                })}>{name}</Link>
                <span>{text}</span>
            </li>
    )
}

export default MemberList
