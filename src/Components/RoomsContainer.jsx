import React, {useContext} from 'react';
import {RoomContext} from '../Context';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
import Loading from './Loading';

function RoomsContainer() {
    const { sortedRooms, loading, rooms } = useContext(RoomContext);

    if(loading) {
        return <Loading/>;
    } else {
        return (
            <>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </>
        )
    }
};

export default RoomsContainer;
