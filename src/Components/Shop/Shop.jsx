import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
     const [products, setShops] = useState([]);
     const [cart, setCart] = useState([]);
     const [cart, setItem] = useState([]);
     useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setShops(data))
     }, [])

      const addToCart = (product) =>{
        const newCart = [...cart, product];
        //setCart(newCart);
        newCart.length<=4 ? setCart(newCart) : ' ';
     } 
   //select random one
   const chooseRandomOne = () =>{
       const random = Math.floor(Math.random() * cart.length);
       setItem(cart[random]);
   }

     const removeCartItem = () =>{
        setCart([]);
    }

    return (
        <div className='row'>
           <h1 className="top-head text-center p-3">Bag World !!</h1>
            <p className='top-para text-center pb-4'>---Buy a new bag which bag you like most---</p>
              <div className="col-lg-9 col-12 order-2 order-lg-0 order-md-1">
                 <div className="row">
                  {
                      products.map(product => <Card product={product} key={product.id} addToCart={addToCart}></Card>)
                  }
                 </div>
              </div>
             <div className="col-lg-3 col-12 order-1 order-lg-0 order-md-0 cart-content cart-model mt-4 rounded">
              <Cart cart={cart} removeCartItem={removeCartItem} chooseRandomOne={chooseRandomOne}></Cart>
            </div>
        </div>
    );
};

export default Shop;
