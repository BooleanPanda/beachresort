import React, {useState, useEffect, createContext} from 'react';
import items from './data';

export const RoomContext = createContext();

export const RoomProvider = (props) => {
    const [rooms,setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('all');
    const [capacity, setCapacity] = useState(1);
    const [price, setPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(0);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));

        setPrice(maxPrice);
        setMaxPrice(maxPrice);
        setMaxSize(maxSize);
        setRooms(rooms);
        setSortedRooms(rooms);
        setFeaturedRooms(featuredRooms);
        setLoading(false);
    },[]);

    function formatData (items) {
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => 
                image.fields.file.url
            );
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    };

    function getRoom (slug) {
        let tempRooms = [...rooms];
        let room = tempRooms.find((room)=>room.slug === slug);
        return room;
    };

    function handleChange (event) {
        const target = event.target;
        const name = event.target.name;
        const value = target.type==='checkbox' ? target.checked : target.value;
        switch (name) {
            case 'type' : setType(value); filterRooms(value,capacity,price,minSize,maxSize,breakfast,pets); break;
            case 'capacity' : setCapacity(value); filterRooms (type,value,price,minSize,maxSize,breakfast,pets); break;
            case 'price' : setPrice(value); filterRooms (type,capacity,value,minSize,maxSize,breakfast,pets); break;
            case 'minSize' : setMinSize(value); filterRooms (type,capacity,price,value,maxSize,breakfast,pets); break;
            case 'maxSize' : setMaxSize(value); filterRooms (type,capacity,price,minSize,value,breakfast,pets); break;
            case 'breakfast' : setBreakfast(value); filterRooms (type,capacity,price,minSize,maxSize,value,pets); break;
            case 'pets' : setPets(value); filterRooms (type,capacity,price,minSize,maxSize,breakfast,value); break;
            default : throw new Error('seems like something went wrong');
        }
    };

    function filterRooms (type,capacity,price,minSize,maxSize,breakfast,pets) {
        let tempRooms = [...rooms];
        let tempCapacity = parseInt(capacity);
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if (tempCapacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= tempCapacity);
        }
        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        setSortedRooms(tempRooms);
    };


    return (
        <RoomContext.Provider
            value={{
                rooms : rooms,
                sortedRooms : sortedRooms,
                featuredRooms : featuredRooms,
                loading : loading,
                getRoom : getRoom,
                handleChange : handleChange,
                type : type, setType,
                capacity : capacity, setCapacity,
                price : price, setPrice,
                minPrice : minPrice, setMinPrice,
                maxPrice : maxPrice, setMaxPrice,
                minSize : minSize, setMinSize,
                maxSize : maxSize, setMaxSize,
                breakfast : breakfast, setBreakfast,
                pets : pets, setPets
            }}
        >
            {props.children}
        </RoomContext.Provider>
    )
};