import React from 'react';

const SButton = ({ text, onClick }) => {
  return (
    <button className="sbutton" onClick={onClick}>Submit</button>
  );
};

export default SButton;