import React from 'react';
import './Choosen.css';
const Choosen = (props) => {
    const {name, picture} = props.bag
    return (
        <div className="bg-danger text-white mt-3 p-1 rounded">
            <p><img className="choosen-img rounded" src={picture}/> {name}</p>
        </div>
    );
};

export default Choosen;