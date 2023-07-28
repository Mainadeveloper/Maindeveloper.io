import React, { useState } from 'react';

const TextBox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="box2">
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
     
    </div>
  );
};

export default TextBox;