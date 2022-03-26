import React from 'react';
import Choosen from '../ChooseItem/Choosen';
import DisplayItem from '../Display/DisplayItem';
import './Cart.css';
const Cart = (props) => {
    const {cart, removeCartItem, chooseRandomBag, choosenBag} = props;
    return (
        <div>
            <h3 className='text-center p-3 fs-3 headings'>Selected Products</h3>
             <div className="bg-light rounded mt-2 p-4">
               {
                  cart.map((item,index) => <DisplayItem item={item} key={index}></DisplayItem>)
               }
                {choosenBag && <Choosen bag={choosenBag}></Choosen>}
               </div> 
              <div className="pt-4">
                <button onClick={chooseRandomBag} className="border-0 rounded bg-warning p-2 text-white fs-5">CHOOSE 1 FOR ME</button>
               <div>
                <button onClick={removeCartItem} className="mt-2 border-0 rounded bg-info p-2 text-white fs-5">CHOOSE AGAIN</button>
               </div>
            </div>
        </div>
    );
};

export default Cart;