import React from 'react';
import './Tile.css';

const Tile = ({ children }) => (
  <button className="Tile">
    <i className="connector x" />
    <i className="connector y" />
    <i className="connector i" />
    <i className="connector j" />
    {children}
  </button>
);

export default Tile;
