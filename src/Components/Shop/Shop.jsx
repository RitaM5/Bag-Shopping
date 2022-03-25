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

      const handleCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
     } 

     const ChooseAgain = () =>{
        cart.removeItem
    }

    return (
        <div className='row'>
           <h2 className="text-success text-center p-3">Bag World !!</h2>
             <div className="col-lg-9 food-content">
                 <div className="row">
                  {
                      products.map(product => <Card product={product} key={product.id} handleCart={handleCart}></Card>)
                  }
                 </div>
              </div>
             <div className="col-lg-3 cart-content bg-secondary mt-2 rounded">
              <Cart cart={cart}></Cart>
               <div className="pt-3">
                <button className="border-0 rounded">CHOOSE 1 FOR ME</button>
               <div>
               <button onClick={ChooseAgain} className="mt-2 border-0 rounded">CHOOSE AGAIN</button>
               </div>
            </div>
          </div>
        </div>
    );
};

export default Shop;