import React, { useState } from 'react';

const ArchiveComponent = () => {
  const [selectedTables, setSelectedTables] = useState(new Array(6).fill(null));
  const [selectedTabllet, setSelectedTabllet] = useState(null);

  const handleTraveClick = (tableNumber, epicIndex) => {
    const updatedSelectedTables = [...selectedTables];
    updatedSelectedTables[epicIndex] = tableNumber;
    setSelectedTables(updatedSelectedTables);
    setSelectedTabllet(null);
  };

  const handleTablletClick = (tablletNumber) => {
    setSelectedTabllet(tablletNumber);
  };

  const generateTableRows = (epicIndex) => {
    const rows = [];
    for (let i = 0; i < 2; i++) {
      rows.push(
        <tr key={i}>
          {generateTableCells(i, epicIndex)}
        </tr>
      );
    }
    return rows;
  };

  const generateTableCells = (rowIndex, epicIndex) => {
    const cells = [];
    for (let i = 0; i < 8; i++) {
      const cellIndex = rowIndex * 8 + i;
      cells.push(
        <td key={cellIndex}>
          <button onClick={() => handleTraveClick(cellIndex + 1, epicIndex)}>Travé {cellIndex + 1}</button>
          {selectedTables[epicIndex] === cellIndex + 1 && (
            <div>
              <h3>Tabllet de Rangement for Travé {cellIndex + 1}</h3>
              {generateTablletButtons()}
            </div>
          )}
        </td>
      );
    }
    return cells;
  };

  const generateTablletButtons = () => {
    const buttons = [];
    for (let i = 0; i < 5; i++) {
      buttons.push(
        <button key={i} onClick={() => handleTablletClick(i + 1)}>Tabllet de Rangement {i + 1}</button>
      );
    }
    return buttons;
  };

  const renderTables = () => {
    const tables = [];
    for (let i = 0; i < 6; i++) {
      tables.push(
        <div key={i}>
          <h2>Epic {i + 1}</h2>
          <table>
            <tbody>
              {generateTableRows(i)}
            </tbody>
          </table>
        </div>
      );
    }
    return tables;
  };

  return (
    <div>
      <h1>مكان تخزين الملفات</h1>
      {renderTables()}
    </div>
  );
};

export default ArchiveComponent;
