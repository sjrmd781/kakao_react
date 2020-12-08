import React from 'react';
import {Link} from 'react-router-dom'
import Nav from '../components/Nav';
import './Find.scss';

function Find() {
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
                <h2>Find</h2>
                <span></span>
            </div>
        </header>
        <div class="main">
            <ul>
                <li><i class="fas fa-address-book"></i>Find</li>
                <li><i class="fas fa-qrcode"></i>QR Code</li>
                <li><i class="fas fa-mobile-alt"></i>Shake</li>
                <li><i class="far fa-envelope"></i>Invite via SMS</li>
            </ul>
            <h6>Recommended Friends</h6>
            <p>You have no recommended friends.</p>
        </div>
        <Nav />
        </>
    )
    
}
export default Find
