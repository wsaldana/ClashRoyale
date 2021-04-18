import React from 'react';
import yt from '../public/icons/yt_text.png';

export default function Card(props) {
    return (
        <div className="card">
            <a href={props.link}>
                <div className="playbtn"/>
                <img src={props.img}/>
                
                <div id="card_title">
                    <h3>{props.title}</h3>
                    <img src={yt}/>
                </div>
            </a>
        </div>
    )
}
