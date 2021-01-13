import React from 'react';
import './style.css'

export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://lh3.googleusercontent.com/proxy/v2c2xgOggOnIIHKJo8zgeYPbr6SuwAB1HjO12S0Us5IK6Bqw-DgN4T60rU1A44L-y-hgN6slfZljU77lvuT-AOUlGg_iQHt6k-aUHWpETLjaBQ5QRDusw5EGkEI" alt="Logo Netix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Logo Netix"/>
                </a>
            </div>
        </header>
    );
}

