import React from 'react';
import './Card.css';

const Card = (props) => {
    const {id, name, price, picture} = props.product;
    return (
        <div className="col-lg-4 col-md-6 col-12 g-3">
           <div class=" g-4">
               <div class="col">
                   <div class="card h-100">
                      <div className="text-center">
                        <img className='card-image' src={picture} alt=""/>
                       </div>
                        <div className="ms-3">
                          <h5>Name: {name}</h5>
                           <p>Id: {id}</p>
                           <p>Price: {price}</p>
                        </div>
                        <button className="border-0 bg-secondary"><span className='text-white'>Add to Cart</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
/*<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>*/
  /*  <div class="card">
                <img className='w-75' src={picture} alt=""/>
                  <div className="ms-3">
                  <h5>Name: {name}</h5>
                  <p>Id: {id}</p>
                  <p>Price: {price}</p>
                  </div>
                  <button className="">Add to Cart</button>
             </div>*/ 