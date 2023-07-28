import React, { useState } from 'react';
const SubTotalBox = () => {
    const [subTotalBox, setSubTotalBox] = useState('');
  
    const handleInputChange = (event) => {
      setSubTotalBox(event.target.value);
    };
    return (
    <div className="subtotal">
     
       <label htmlFor= "subTotal" >SubTotal:</label>
      <input
        type="number"
        id="subTotal"
        name="subTotal"
        placeholder="Enter the subTotal"
        value={subTotalBox}
        onChange={handleInputChange}
        min="0"
        step="0.01"
        required
      />
    </div>
          );
        };
        
        export default SubTotalBox;
        