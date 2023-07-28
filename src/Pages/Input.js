import React, { useState } from 'react';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:', { firstName, secondName, phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="first">
        <label >
          First Name
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
      </div>
      <div className="second">
        <label className="second">
          Second Name
          <input type="text" value={secondName} onChange={handleSecondNameChange} />
        </label>
      </div>
      <div className="phone">
        <label>
          Phone Number
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </label>
      </div>
      
    </form>
  );
}

export default MyForm;
