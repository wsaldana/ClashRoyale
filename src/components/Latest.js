import React from 'react';
import phone from '../public/img/phone2.png';

export default function Latest() {
    return (
        <div className="strip" id="latest">
            <div className="content_phone">
                <div className="phone_div">
                    <img className="phone" src={phone}/>
                </div>
                <div className="content">
                    <br/><br/>
                    <h2>SEE THE LATEST</h2>
                    <p>To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</p>
                    <div className="media">
                        <p>FOLLOW CLASH ROYALE ON</p>
                        <div>
                            <a href="https://www.reddit.com/r/ClashRoyale" className="icon" id="rd" >A.</a>
                            <a href="https://www.youtube.com/channel/UC_F8DoJf9MZogEOU51TpTbQ" className="icon" id="yt" >A.</a>
                            <a href="http://www.facebook.com/ClashRoyale" className="icon" id="fb" >A.</a>
                            <a href="https://www.instagram.com/ClashRoyale/" className="icon" id="ig" >A.</a>
                            <a href="http://www.twitter.com/ClashRoyale" className="icon" id="tw" >A.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
