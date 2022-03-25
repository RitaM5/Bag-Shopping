import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shop.css';

const Shop = () => {
     const [products, setShops] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(() => {
         fetch('data.json')
         .then(res => res.json())
         .then(data => setShops(data))
     }, [])

    /*  const handleCart = (meal) =>{
        const newCart = [...cart, meal];
        setCart(newCart);
     } */

    return (
        <div className='row'>
           <h2 className="text-success text-center p-3">Bag World !!</h2>
             <div className="col-lg-9 food-content">
                 <div className="row">
                  {
                      products.map(product => <Card product={product} key={product.id}></Card>)
                  }
                 </div>
              </div>
             <div className=" col-lg-3 cart-content bg-secondary mt-2">
             <h2>cart</h2>
          </div>
        </div>
    );
};

export default Shop;