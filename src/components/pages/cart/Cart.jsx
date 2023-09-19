import React, { useState } from 'react';

const Menu = ({ menuItems }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.name} - {item.price}
                <button onClick={() => addToCart(item)}>Agregar al carrito</button>
              </li>
            ))}
          </ul>.
          
        </div>
      ))}
      <h2>Carrito</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            {cartItem.name} - {cartItem.price}
            <button onClick={() => removeFromCart(index)}>Eliminar del carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
