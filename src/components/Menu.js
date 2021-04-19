import React from 'react';
import supercell from '../public/img/logo_supercell.png';
import supercellId from '../public/img/supercell_id.png';
import lupa from '../public/icons/lupa.png';

export default function Menu() {
    return (
        <div className="menu">
            <div class="navbar">

                <a href="https://supercell.com/en/" ><img src={supercell} id="menu_logo" /></a>

                <div class="dropdown">
                    <button class="dropbtn">Games 
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Hay Day</a>
                    <a href="#">Clash of Clans</a>
                    <a href="#">Boom Beach</a>
                    <a href="#">Clash Royale</a>
                    <a href="#">Brawl Stars</a>
                    </div>
                </div> 

                <div class="dropdown">
                    <button class="dropbtn">Careers 
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Why You Might Love It Here</a>
                    <a href="#">Our Offices</a>
                    <a href="#">Joining Supercell</a>
                    <a href="#">Living in Helsinki</a>
                    <a href="#">Living in Shanghai</a>
                    <a href="#">Open Positions</a>
                    </div>
                </div> 

                <a href="#news">Support</a>

                <div class="dropdown">
                <button class="dropbtn" id="dots"><p>...</p> 
                </button>
                <div class="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">Be Safe & Play Fair</a>
                <a href="#">For Media</a>
                <a href="#">Investments</a>
                </div>
            </div> 

            <a href="https://supercell.com/en/supercell-id/">
                <img src={supercellId} id="supercell_id"/>
            </a>

            <button id="lupa">
                <img src={lupa} /> 
            </button>

            </div>
        </div>
    )
}
