import React, { useState, useEffect } from 'react';
import './style.css';
import { Route, Link } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
export default function App() {
  return (
    <div className="main">
      <h1>Gif Searcher</h1>

      <Link to="/gif/baseball"> Gif de Baseball</Link>
      <Link to="/gif/basketball"> Gif de Basketball</Link>

      <Route component={ListOfGifs} path="/gif/:keySearch" />
    </div>
  );
}
