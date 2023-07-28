// QuantityBox.js
import React, { useState } from 'react';

const QuantityBox = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-box">
         <p></p>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityBox;
