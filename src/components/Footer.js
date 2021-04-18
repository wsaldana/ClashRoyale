import React from 'react';
import ios from '../public/img/appstore.png';
import android from '../public/img/googleplay.png';
import supercell from '../public/img/logo_supercell.png';

export default function Footer() {
    return (
        <div className="strip" id="footer">
            <div id="footer_contact">
                <div>
                    <p>Follow us on</p>
                    <div>
                        <a href="https://www.youtube.com/channel/UC_F8DoJf9MZogEOU51TpTbQ" className="icon" id="yt" >A.</a>
                        <a href="http://www.facebook.com/ClashRoyale" className="icon" id="fb" >A.</a>
                        <a href="https://www.instagram.com/ClashRoyale/" className="icon" id="ig" >A.</a>
                        <a href="http://www.twitter.com/ClashRoyale" className="icon" id="tw" >A.</a>
                        <a href="https://supr.cl/2T3yYJS" className="icon" id="lk" >A.</a>
                        <a href="https://supr.cl/2H81F5R" className="icon" id="gd" >A.</a>
                    </div>
                </div>
                <div className="footer_btn">
                    <a href="https://apps.apple.com/app/id1053012308">
                        <img className="btn" src={ios} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale">
                        <img className="btn" src={android} />
                    </a>
                </div>
            </div>
            <br/>
            <div id="footer_links">
                <div>
                    <a href="https://supercell.com/en/terms-of-service/">Terms of Service</a>
                    <a href="https://supercell.com/en/privacy-policy/">Privacy Policy</a>
                    <a href="https://supercell.com/en/parents/">Parent's Guide</a>
                    <a href="https://supercell.com/en/safe-and-fair-play/">Safe and Fair Play Policy</a>
                    <br/>
                    <p> Supercell Oy
                        Jätkäsaarenlaituri 1
                        00180 Helsinki
                        Finland
                    </p>
                </div>
                <div id="logo_link" > <a href="https://supercell.com/en/" ><img src={supercell} /></a> </div>
            </div>
        </div>
    )
}
