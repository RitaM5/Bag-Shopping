import React from 'react';
import './DisplayItem.css';
const DisplayItem = (props) => {
    const {name, picture} = props.item;
    return (
        <div>
            <h5><img className="item-img" src={picture}/>{name}</h5>
        </div>
    );
};

export default DisplayItem;