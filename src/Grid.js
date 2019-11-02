import React from 'react';
import Tile from './Tile';
import './Grid.css';

const layout = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

const Grid = () => (
  <div className="Grid">
    <table>
      {layout.map((tiles, index) => (
        <tr key={index}>
          {tiles.map(key => (
            <td key={key}>
              <Tile>{key}</Tile>
            </td>
          ))}
        </tr>
      ))}
    </table>
  </div>
);

export default Grid;
