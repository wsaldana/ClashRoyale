import React from 'react';
import phone from '../public/img/phone1.jpg';
import ios from '../public/img/appstore.png';
import android from '../public/img/googleplay.png';

export default function Download() {
    return (
        <div className="strip" id="download">
            <div className="content_phone">
                <div className="phone_div">
                    <img className="phone" src={phone}/>
                </div>
                <div className="content">
                    <br/>
                    <h2>EPIC REAL-TIME CARD BATTLES</h2>
                    <p>Clash Royale is a real-time multiplayer game starring the Royales, your favourite Clash characters and much, much more. Collect and upgrade dozens of cards featuring the Clash of Clans troops, spells and defenses you know and love, as well as the Royales: Princes, Knights, Baby Dragons and more. Knock the enemy King and Princesses from their towers to defeat your opponents and win Trophies, Crowns and glory in the Arena.</p>
                    <div>
                        <a href="https://apps.apple.com/app/id1053012308">
                            <img className="btn" src={ios} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale">
                            <img className="btn" src={android} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
