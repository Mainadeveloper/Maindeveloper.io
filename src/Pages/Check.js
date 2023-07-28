import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      Check the box to agree to the terms and conditions of renting on the Rentisha platform.
        
      </label>
    </div>
  );
}

export default CheckboxExample;
