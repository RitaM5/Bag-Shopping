import React from 'react';

const Choosen = (props) => {
    const {name} = props.bag
    return (
        <div className="bg-danger text-white p-2 mt-3 rounded">
            <p>Choosen bag is : {name}</p>
        </div>
    );
};

export default Choosen;