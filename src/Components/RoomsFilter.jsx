import React, { useContext } from 'react';
import {RoomContext} from '../Context';
import Title from '../Components/Title';

function RoomsFilter({rooms}) {
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(RoomContext);
    let types = getUnique(rooms,'type');
    let people = getUnique(rooms,'capacity');
    types = ['all',...types];
    return (
        <section className="filter-container">
            <Title title='search rooms'/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types.map((item,index)=>{return(<option value={item} key={index}>{item}</option>)})}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people.map((item,index)=>{return(<option value={item} key={index}>{item}</option>)})}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size SQFT</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" min={0} value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" min={0} value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
};

function getUnique (items, value) {
    return (
        [...new Set(items.map(item=>item[value]))]
    );
};

export default RoomsFilter;
