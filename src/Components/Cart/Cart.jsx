import React from 'react';
import DisplayItem from '../Display/DisplayItem';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h3 className='text-center p-3'>Cart</h3>
            <div className="bg-warning p-4 rounded ">
               {
                   cart.map(item => <DisplayItem item={item}></DisplayItem>)
               }
            </div>
        </div>
    );
};

export default Cart;