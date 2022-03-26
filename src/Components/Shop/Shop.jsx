import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
     const [products, setShops] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setShops(data))
     }, [])

      const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
     } 
     const removeCartItem = () =>{
        setCart([]);
    }
    return (
        <div className='row'>
           <h1 className="text-success text-center p-3">Bag World !!</h1>
            <p className='text-center fs-4'>Buy a new bag which bag you like most</p>
              <div className="col-lg-9 col-12 order-2 order-lg-0 order-md-1">
                 <div className="row">
                  {
                      products.map(product => <Card product={product} key={product.id} addToCart={addToCart}></Card>)
                  }
                 </div>
              </div>
             <div className="col-lg-3 col-12 order-1 order-lg-0 order-md-0 cart-content bg-secondary mt-2 rounded">
              <Cart cart={cart} removeCartItem={removeCartItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;
