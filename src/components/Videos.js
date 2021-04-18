import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import img1 from '../public/items/1.jpg';
import img2 from '../public/items/2.jpg';
import img3 from '../public/items/3.jpg';
import img4 from '../public/items/4.jpg';
import img5 from '../public/items/5.jpg';
import img6 from '../public/items/6.jpg';
import img7 from '../public/items/7.jpg';
import img8 from '../public/items/8.jpg';

export default function Videos() {

    const items = [
        {img:img1, link:'https://www.youtube.com/watch?v=2SqviHphY8A', title:'Deck the Arena!'},
        {img:img2, link:'https://www.youtube.com/watch?v=zbVa7koGVQY', title:'Elixir Golem'},
        {img:img3, link:'https://www.youtube.com/watch?v=F4AmkFBJFTA', title:'The Flood'},
        {img:img4, link:'https://www.youtube.com/watch?v=EW9ETqA1abI', title:'Ram Rider'},
        {img:img5, link:'https://www.youtube.com/watch?v=FBRWUwm0_gY', title:'Introducing Star Levels'},
        {img:img6, link:'https://www.youtube.com/watch?v=uVcvhKTVZ8g', title:'Clan Wars is Here'},
        {img:img7, link:'https://www.youtube.com/watch?v=TJryIc0Cwy4', title:'Last Second'},
        {img:img8, link:'https://www.youtube.com/watch?v=4Jdp_dkduJc', title:'Epic Comeback'}
    ]

    return (
        <div className="strip" id="carousel_strip">
            <Carousel itemsToShow={2}>
                {items.map((item) => {
                    return <Card img={item.img} link={item.link} title={item.title} >.</Card>
                })}
            </Carousel>
        </div>
    )
}
