import React, { useState } from 'react';
const RentingPriceBox = () => {
    const [rentingPriceBox, setRentingPriceBox] = useState('');
  
    const handleInputChange = (event) => {
      setRentingPriceBox(event.target.value);
    };
    return (
    <div className="renting-price-box">
     
       <label htmlFor= "renting-price-box" >Renting  Price:</label>
      <input
        type="number"
        id="renting-price-box"
        name="renting-price-box"
        placeholder="Enter the renting price"
        value={rentingPriceBox}
        onChange={handleInputChange}
        min="0"
        step="0.01"
        required
      />
    </div>
    
  );
};

export default RentingPriceBox;
