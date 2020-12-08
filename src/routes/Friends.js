import React from 'react';
import MemberList from '../components/MemberList';
import profiles from '../data/memberList.json';
import Nav from '../components/Nav';
import './Friends.scss';

function Friends() {

    const myprofile = profiles[0];
    return (
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
                <p>Manage</p>
                <h2>Friends<span> 1</span></h2>
                <p><i className="fas fa-cog"></i></p>
            </div>
        </header>
        <div className="container">
            <div className="top">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" />
            </div>
            <section className="myprofile">
                <h4>My Profile</h4>
                <ul>
                    <MemberList 
                        id = {myprofile.id}
                        name = {myprofile.name}
                        email = {myprofile.email}
                        img = {myprofile.profileimg}
                        text = {myprofile.profilemsg}
                        bg = {myprofile.backgroundimg}
                    />
                </ul>
            </section>
            <section className="friends">
                <h4>Friends</h4>
                <ul>
                    {profiles.map(profile =>{
                        if(profile.id != 0) {return(
                            <MemberList 
                                id = {profile.id}
                                name = {profile.name}
                                email = {profile.email}
                                img = {profile.profileimg}
                                text = {profile.profilemsg}
                                bg = {profile.backgroundimg}
                            />
                        )}
                    })}               
                </ul>
            </section>
        </div>
        <Nav />
        </>
    )
}

export default Friends;