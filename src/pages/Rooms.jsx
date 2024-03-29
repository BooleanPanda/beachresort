import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import RoomsContainer from '../Components/RoomsContainer';

function Rooms() {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
}

export default Rooms;
