import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setCart] = useState(false);

  function handleClick () {
    setCart((inCart) => !inCart);
  }

  return (
    <li className= {inCart ? 'in-cart' : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {inCart ? "remove" : "add"} onClick= {handleClick}> {inCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
