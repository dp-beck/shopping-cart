import {React, useState} from "react";

// Add to Cart Button that updates cart with what is in the input field

const ItemCard = (props) => {

    const [numOfItems, setNumOfItems] = useState(0);

    const inputId = props.name + "Number";

    const handleChange = (e) => {
        setNumOfItems(e.target.value);
    };

    return (
        <div>
            <p>{props.name[0].toUpperCase().concat('', props.name.substring(1)).replaceAll('_', ' ')}</p>
            <p>${props.price}</p>
            <img className="fish-picture" src={props.picture} alt={props.name}/>
            <input
                onChange={handleChange}
                value={numOfItems}
                type="number"
                id= {inputId}
                min="0"
            /> 
            <p>${numOfItems * props.price}</p>
            <button id={props.name} onClick={props.updateCart}>Update Cart</button>
        </div>
    )

}

export default ItemCard;