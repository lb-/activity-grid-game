import React from 'react';
import './Grid.css';

const Grid = () => (
  <div className="Grid">
    <table>
      <tr>
        <td>Top Left</td>
        <td>Top Centre</td>
        <td>Top Right</td>
      </tr>
      <tr>
        <td>Middle Left</td>
        <td>Middle Centre</td>
        <td>Middle Right</td>
      </tr>
      <tr>
        <td>Bottom Left</td>
        <td>Bottom Centre</td>
        <td>Bottom Right</td>
      </tr>
    </table>
  </div>
);

export default Grid;
