import React, { useState } from 'react';
import ItemList from './DynamicListManager.jsx';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Dynamic List Manager</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default App;
