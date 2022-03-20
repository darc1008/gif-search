import React, { useState, useEffect } from 'react';
import './style.css';
import ListOfGifs from './components/ListOfGifs';
export default function App() {
  const [keySearch, setKeySearch] = useState('panda');
  return (
    <div className="main">
      <ListOfGifs keySearch={keySearch} />
    </div>
  );
}
