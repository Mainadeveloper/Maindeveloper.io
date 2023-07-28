import React, { useState } from 'react';
const RentingDuration= () => {
    const [rentingDuration, setRentingDuration] = useState('');
  
    const handleInputChange = (event) => {
      setRentingDuration(event.target.value);
    };
    return (
        <div className="renting-Duration">
         
           <label htmlFor= "renting-Duration" >Renting  Duration:</label>
          <input
            type="number"
            id="renting-Duration"
            name="renting-Duration"
            placeholder="renting-Duration in weeks"
            value={rentingDuration}
            onChange={handleInputChange}
            min="1"
            step="1"
            required
          />
        </div>
        
      );
    };
    
    export default RentingDuration;
    