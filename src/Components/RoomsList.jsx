import React from 'react';
import Room from './Room';

function RoomsList({rooms}) {
    if(rooms.length===0) {
        return (
            <div className="empty-search">no rooms matching your search parameters</div>
        )
    } else {
        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {rooms.map(item => {return<Room key={item.id} room={item}/>})}
                </div>
            </section>
        )
    }
};

export default RoomsList;
