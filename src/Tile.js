import React, { useState } from 'react';
import './Tile.css';

const Tile = ({ children, image }) => {
  const [rotation, rotate] = useState(0);

  return (
    <button
      className="Tile"
      onClick={() => {
        switch (rotation) {
          case 0:
            rotate(90);
            break;
          case 90:
            rotate(180);
            break;
          case 180:
            rotate(270);
            break;
          case 270:
            rotate(0);
            break;
          default:
            break;
        }
      }}
      style={{
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `url(${image})`
      }}
    >
      <span className="label">{children}</span>

      <i className="connector x" />
      <i className="connector y" />
      <i className="connector i" />
      <i className="connector j" />
    </button>
  );
};

export default Tile;
