import React from 'react';
import clash_logo from '../public/img/logo.png'

export default function Header() {
    return (
        <div className="strip" id="clashHeader">
            <img src={clash_logo} id="logo"/>
        </div>
    )
}
