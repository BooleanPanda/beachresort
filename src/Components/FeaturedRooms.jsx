import React, {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

function FeaturedRooms() {
    const { featuredRooms, loading } = useContext(RoomContext);
    const featuredRoomsArr = featuredRooms.map(room=>{
        return <Room key={room.id} room={room}/>
    });
    return (
        <section className='featured-rooms'>
            <Title title='featured rooms'/>
            <div className='featured-rooms-center'>
                {loading ? <Loading/> : featuredRoomsArr}
            </div>
        </section>
    );
};

export default FeaturedRooms;