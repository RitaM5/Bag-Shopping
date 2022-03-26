import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Card.css';

const Card = (props) => {
    const {addToCart, product} = props;
    const { name, price, picture} = props.product;
    return (
        <div className="col-lg-6 col-xl-4 col-md-6 col-12 g-4">
               <div className="col h-100">
                  <div className="card Larger shadow">
                   <img className='card-image mx-auto py-2 rounded' src={picture} alt=""/>
                      <div className="ms-3">
                        <h5>Name: {name}</h5>
                           <p>Price: {price}</p>
                       </div>
                       <button onClick={()=>addToCart(product)} className="border-0 bg-dark"><span className='text-white me-3'>Add to Cart</span><FontAwesomeIcon className="text-white" icon={faShoppingCart}></FontAwesomeIcon></button>
                  </div>
              </div>    
        </div>
    );
};

export default Card;
