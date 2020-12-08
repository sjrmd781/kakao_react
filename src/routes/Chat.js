import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Chat.scss'

function Chat(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, img, username} = location.state;
      
    
        return(
            <>
            <header>
                <div className="status_bar">
                    <ul>
                        <li><i className="fas fa-fighter-jet"></i></li>
                        <li><i className="fas fa-wifi"></i></li>
                    </ul>
                    <p className="time">17:33</p>
                    <ul>
                        <li><i className="far fa-moon"></i></li>
                        <li><i className="fab fa-bluetooth-b"></i></li>
                        <li>100%</li>
                        <li><i className="fas fa-battery-full"></i></li>
                    </ul>
                </div>  
                <div className="header_inner">
                    <Link to="/Chats">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    <h2>{username}</h2>
                    <ul>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="fas fa-bars"></i></li>
                    </ul>
                </div>
            </header>
            <div className="chat">
                <p>Wednesday, April 12, 2018</p>
                <div className="message">
                    <div className="mychat">
                        <p>Hello!</p>
                        <p>Hello! This is a text message. Hello!</p>
                        <p>This is a test message</p>
                        <span>17:33</span>
                    </div>
                    <div className="friend">
                        <img src={img} alt="프로필이미지" width="35" height="35"/>
                        <h3>{username}</h3>
                        <p>And this is an answer</p>
                        <p>And this is an answer And this is an answer</p>
                        <p>And this is an answer</p>
                        <span>20:37</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <i className="fas fa-plus"></i>
                <div className="type">
                    <input type="text" />
                    <i className="far fa-smile"></i>
                </div>
                <p><i className="fas fa-microphone"></i></p>
            </div>
            </>
        )
    }else return null;
}

    

export default Chat