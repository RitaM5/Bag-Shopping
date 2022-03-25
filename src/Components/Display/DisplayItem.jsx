import React from 'react';

const DisplayItem = (props) => {
    const {name} = props.item;
    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default DisplayItem;