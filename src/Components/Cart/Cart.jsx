import React from 'react';
import DisplayItem from '../Display/DisplayItem';

const Cart = (props) => {
    const {cart, removeCartItem} = props;
console.log(removeCartItem);
    return (
        <div>
            <h3 className='text-center p-3 text-white fs-3'>Selected Products</h3>
            <div className="bg-warning p-4 rounded mt-3 py-5">
               {
                   cart.map(item => <DisplayItem item={item} key={item.id}></DisplayItem>)
               }
            </div>
            <div className="pt-4">
                <button className="border-0 rounded bg-success p-2 text-white fs-5">CHOOSE 1 FOR ME</button>
               <div>
                <button onClick={removeCartItem} className="mt-2 border-0 rounded bg-danger p-2 text-white fs-5">CHOOSE AGAIN</button>
               </div>
            </div>
        </div>
    );
};

export default Cart;