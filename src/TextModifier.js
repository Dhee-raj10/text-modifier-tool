import React, { useState } from 'react';

export default function TextModifier() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toUpperCase = () => {
    setResult(text.toUpperCase());
  };

  const toLowerCase = () => {
    setResult(text.toLowerCase());
  };

  const getLength = () => {
    setResult(`Length: ${text.length}`);
  };

  const clearText = () => {
    setText('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <div>
        <button onClick={toUpperCase}>Uppercase</button>
        <button onClick={toLowerCase}>Lowercase</button>
        <button onClick={getLength}>Length</button>
        <button onClick={clearText}>Clear</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
