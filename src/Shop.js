import React, { useState } from "react";
import ItemCard from './itemCard.js';
import { Link } from 'react-router-dom';

const Shop = ({ itemArray, totalItemsInCart, updateTotalItemsInCart, updateCart }) => {

    const [showCart, setShowCart]  = useState(false);
     
    const toggleShowCart = () => {
      setShowCart(!showCart);
      }
    
    return (
      <div className="shop">
        <div>
          <div className="cart-button-wrapper">
            <button className="cart-button" onClick={toggleShowCart}>
            ~Go To Shopping Cart~
            </button>
          </div>
        </div>
          <ul className="cards-wrapper">
            {itemArray.map(e => <li className="fish-card"><ItemCard 
              name={e.name} 
              price={e.price} 
              picture={e.pictureUri}
              updateCart={updateCart}/>
              </li>
            )}
        </ul>
        {showCart && 
          <div className="cart">  
            <h1>Shopping Cart</h1>
            <ul className="items-in-cart-wrapper">
              {itemArray.map(e => {
                if (e.numInCart > 0) {
                  return (
                  <li className="item-in-cart">
                    {e.name[0].toUpperCase().concat('', e.name.substring(1)).replaceAll('_', ' ')} - ${e.price} X {e.numInCart} . . . ${e.numInCart * e.price}
                  </li>
                  )
                };
              })}
            </ul>
            <p>Total: ${itemArray.reduce(
              (accumulator, currentValue) => accumulator + currentValue.numInCart * currentValue.price, 0
            )}</p>
            <Link to ='/'>
              <button>Proceed to Payment</button>
            </Link>
            <button onClick={toggleShowCart}>Close Cart</button>
          </div> }
    </div>
    );
  }
  
  export default Shop;