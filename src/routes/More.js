import React from 'react';
import profiles from '../data/memberList.json';
import Nav from '../components/Nav';
import './More.scss';

function More() {
    const myprofile = profiles[0];
    return(
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
                <p></p>
                <h2>More</h2>
                <p><i class="fas fa-cog"></i></p>
            </div>
        </header>
        <div class="more">
            <div class="me">
                <img src={myprofile.profileimg} alt="프로필사진" width="50" height="50"/>
                <h3>{myprofile.name}</h3>
                <span>{myprofile.email}</span>
                <i class="far fa-comment"></i>
            </div>
            <ul>
                <li><i class="far fa-smile"></i>Emotions</li>
                <li><i class="fas fa-paint-brush"></i>Themes</li>
                <li><i class="far fa-hand-peace"></i>Plus Friend</li>
                <li><i class="far fa-user-circle"></i>Account</li>
            </ul>
            <div class="plus">
                <h3>Plus Friends</h3>
                <span><i class="fas fa-info-circle"></i> Learn More</span>
                <div>
                    <p><i class="fas fa-utensils"></i>Order</p>
                    <p><i class="fas fa-home"></i>Store</p>
                    <p><i class="fas fa-tv"></i>TV Channel/Radio</p>
                    <p><i class="fas fa-pencil-alt"></i>Creation</p>
                    <p><i class="fas fa-graduation-cap"></i>Education</p>
                    <p><i class="fas fa-university"></i>Politics/Society</p>
                    <p><i class="fas fa-won-sign"></i>Finance</p>
                    <p><i class="fas fa-video"></i>Movies/Music</p>
                </div>
            </div>
            <div class="app">
                <p><span><img src="images/kakaostory.png" alt="카카오스토리" width="45" /></span>Kakao Story</p>
                <p><span><img src="images/path.png" alt="패스" width="45px" /></span>Path</p>
                <p><span><img src="images/kakaofriends.png" alt="카카오프렌즈" width="45" /></span>kakao friends</p>
            </div>
        </div>
        <Nav />
        </>
    )
}
export default More