import React, { useState } from 'react';

const RentingTotalInput = () => {
  const [rentTotalPrice, setRentTotalPrice] = useState('');

  const handleInputChange = (event) => {
    setRentTotalPrice(event.target.value);
  };

  return (
    <div className="total">
      <label htmlFor="rentTotalPrice">Renting Total Price:</label>
      <input
        type="number"
        id="rentTotalPrice"
        name="rentTotalPrice"
        placeholder="Enter the total renting price"
        value={rentTotalPrice}
        onChange={handleInputChange}
        min="0"
        step="0.01"
        required
      />
    </div>

  );
};

export default RentingTotalInput;
