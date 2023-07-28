import React, { useState } from 'react';

const TextBox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="box1">
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
      <div>
      <input type="text" value={text} onChange={handleChange} />
      </div>
      <br/>
      <input type="text"  value={text} onChange={handleChange} />
      <br/>
   

    </div>
  );
};

export default TextBox;
