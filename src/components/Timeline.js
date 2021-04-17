import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import mosquetera from '../public/img/mosquetera.png'

export default function Timeline() {
    return (
        <div className="strip" id="timeline_strip">
            <div className="content_timeline">
                <img src={mosquetera} id="mosquetera"/>
                <h2>LAUNCH IS ONLY THE BEGINNING</h2>
                <p id="txt-timeline">Clash Royale has been constantly evolving to offer more user-friendly, more consistent and more fun online experiences for Supercell gamers.</p>
                <FontAwesomeIcon icon={faFlag} className="icon"/>
                <tr>
                    <td>Global Launch</td>
                    <td>2v2 Mode</td>
                    <td>Clan Wars</td>
                    <td>Star Levels</td>
                    <td>Trophy Road</td>
                    <td>Seasons</td>
                </tr>
                <div id="lines" />
                <div id="timeline"/>
                <div id="dates">
                    <p>2016</p>
                    <p>TODAY</p>
                </div>
                <br/>
            </div>
        </div>
    )
}
