import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';

function home() {
    return (
    <>
        <Hero>
            <Banner title='luxurious rooms'
                    subtitle='starting at $299'>
                <Link to='/rooms' className='btn-primary'>our rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </>
    )
}

export default home;
