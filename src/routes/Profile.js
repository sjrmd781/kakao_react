import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './Profile.scss';

function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, email, img, bg} = location.state;

    return (
        <>
            <header>
                <div class="status_bar">
                    <ul>
                        <li><i class="fas fa-fighter-jet"></i></li>
                        <li><i class="fas fa-wifi"></i></li>
                    </ul>
                    <p class="time">17:33</p>
                    <ul>
                        <li><i class="far fa-moon"></i></li>
                        <li><i class="fab fa-bluetooth-b"></i></li>
                        <li>100%</li>
                        <li><i class="fas fa-battery-full"></i></li>
                    </ul>
                </div>  
                <div class="header_inner">
                    <Link to="/"><i class="fas fa-times"></i></Link>
                    <span></span>
                    <i class="fas fa-user"></i>
                </div>
            </header>
            <div class="profile_background" style={{background: "url("+bg+") no-repeat 50% 50%" , backgroundSize: "cover"}}>
                <div class="profile">
                    <ul class="profile_header">
                        <li><img src={img} alt="프로필이미지" width="100" height="100"/></li>
                        <li>{name}</li>
                    </ul>
                    <input type="text" placeholder={email} />
                    <ul class="profile_content">
                        <li>
                            <ul class="mychat">
                                <li><i class="fas fa-comment"></i></li>
                                <li>My Chatroom</li>
                            </ul>
                        </li>
                        <li>
                            <ul class="edit">
                                <li><i class="fas fa-pencil-alt"></i></li>
                                <li>Edit Profile</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}else return null;
}
export default Profile