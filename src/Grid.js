import React from 'react';
import SPORTS from './SPORTS';
import Tile from './Tile';
import './Grid.css';

const sportsArray = Object.entries(SPORTS).map(([key, data]) => ({
  key,
  ...data
}));

const layout = [
  [sportsArray[0], sportsArray[1], sportsArray[2]],
  [sportsArray[3], sportsArray[4], sportsArray[5]],
  [sportsArray[6], sportsArray[7], sportsArray[8]]
];

const Grid = () => (
  <div className="Grid">
    <table>
      {layout.map((tiles, index) => (
        <tr key={index}>
          {tiles.map(({ image, key }) => (
            <td key={key}>
              <Tile image={image}>{key}</Tile>
            </td>
          ))}
        </tr>
      ))}
    </table>
  </div>
);

export default Grid;
