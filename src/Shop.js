import React, { useState, useEffect } from "react";

const Shop = () => {

    useEffect(() => {
        fetchFish();
    }, []);

    const [fish, setFish] = useState([]);

    const fetchFish = async () => {
        const data = await fetch('https://acnhapi.com/v1/fish/');
        const fish = await data.json();
        setFish(fish);
    }

    return (
      <div className="Shop">
        <h1>Shop</h1>
        <ul>
        {Object.keys(fish).map(element => <li>{element}</li>)}
        </ul>
        
    </div>
    );
  }
  
  export default Shop;