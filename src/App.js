import React, { useState, useEffect } from 'react';
import './style.css';
import { Route, Link } from 'wouter';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import Home from './pages/Home/index.js';
const POPULAR_GIFS = [
  'matrix',
  'baseball',
  'basketball',
  'dominicana',
  'USA',
  'Rusia',
];
export default function App() {
  return (
    <div className="main">
      <h1>Gif Searcher</h1>

      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
      <Route component={Home} path="/" />
      <Route component={ListOfGifs} path="/search/:keySearch" />
    </div>
  );
}
