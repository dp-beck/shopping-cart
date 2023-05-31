import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import NotFound from "./NotFound";

const App = () => {

  useEffect(() => {
    fetchFish();
  }, []);

  const [itemArray, setItemArray] = useState([]);

  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const fetchFish = async () => {
    const data = await fetch('https://acnhapi.com/v1/fish/');
    const fish = await data.json();
    const itemArray = [];

    for (const property in fish) {
      const item = {};
      item.name = property;
      item.price = fish[property].price;
      item.pictureUri = fish[property]['image_uri'];
      item.numInCart = 0;
      itemArray.push(item);
    };

    setItemArray(itemArray);
    
}

const updateCart = (e) => {
  const index = itemArray.findIndex(item => item.name === e.target.id);
  const inputId = e.target.id + "Number";
  const updatedItemArray = itemArray;
  updatedItemArray[index].numInCart = document.getElementById(inputId).value;
  setItemArray(updatedItemArray);
  updateTotalItemsInCart();
}


const updateTotalItemsInCart = () => {
  const totalNumber = itemArray.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue.numInCart,
    0
  );
 
  setTotalItemsInCart(totalNumber);
  }

    return (
      <HashRouter>
        <nav>
          <ul className="nav-links">
            <Link to='/'>
              <li className="link-text">Home</li>
            </Link>
                                
            <Link to='/shop'>                
              <li className="link-text" data-testid="shop-link">Shop ({totalItemsInCart})</li>
            </Link>
          </ul>
        </nav>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop 
                                        itemArray={itemArray}
                                        totalItemsInCart={totalItemsInCart} 
                                        updateTotalItemsInCart={updateTotalItemsInCart}
                                        updateCart={updateCart}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    );
  };
  
  export default App;
