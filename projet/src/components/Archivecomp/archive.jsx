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
        <table key={i} border="3">
          <thead>
            <tr>
              <th>Tabllet de Rangement {i + 1}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {generateBoxes()}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
    return buttons;
  };

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <div key={i}>
          <h4>Boite {i + 1}</h4>
          {generateFiles()}
        </div>
      );
    }
    // Add an additional box for the fifth "Tabllet de Rangement"
    if (selectedTabllet === 5) {
      boxes.push(
        <div key={4}>
          <h4>Boite 5</h4>
          {generateFiles()}
        </div>
      );
    }
    return boxes;
  };

  const generateFiles = () => {
    const files = [];
    for (let i = 0; i < 5; i++) {
      files.push(<div key={i}>File {i + 1}</div>);
    }
    return files;
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
