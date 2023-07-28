import React, { useState } from 'react';
function TextareaComponent() {
    const [textareaValue, setTextareaValue] = useState('');
  
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
  
    return (
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        rows={3} // Specify the number of rows you want to display
        cols={80} // Specify the number of columns you want to display
        style={{ backgroundColor: '#D9D9D9' }}
      />
 
    );
  }
  export default TextareaComponent;
  