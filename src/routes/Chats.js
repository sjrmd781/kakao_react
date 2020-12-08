import React, {useState, useEffect} from 'react'
import ChatList from '../components/ChatList';
import ImgJSON from '../data/ImgJSON.json';
import Nav from '../components/Nav';
import './Chats.scss';
import axios from 'axios';

function Chats() {
    const chatimg = ImgJSON;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const { data : chats } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }
    useEffect(getData,[]);

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
                <p>Edit</p>
                <h2>Chats <i class="fas fa-caret-down"></i></h2>
                <span></span>
            </div>
        </header>
        <div class="chats">
            <div class="srch">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" />
            </div>
            <section class="list">
            {chats.map((chat, idx) =>(
                            <ChatList 
                                id = {chat.id}
                                username = {chat.username}
                                company = {chat.company}
                                img = {chatimg[idx].img}
                            />
                    ))}
            </section>
            <p class="more"><i class="fas fa-comment"></i></p>
        </div>
        <Nav />
        </>
    )
}

export default Chats