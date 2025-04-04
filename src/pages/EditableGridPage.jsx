import React, { useState, useCallback } from 'react';
import { EditableCell } from '../components/EditableCell';

export const EditableGridPage = () => {
  const [grid, setGrid] = useState([['Ячейка 1']]);
  
  const handleSave = useCallback((newValue, row, col) => {
    setGrid(prev => {
      const newGrid = [...prev];
      newGrid[row][col] = newValue;
      return newGrid;
    });
  }, []);

  const addNewCellDown = useCallback(() => {
    setGrid(prev => [...prev, ['Ячейка']]);
  }, []);

  const addNewCellRight = useCallback((rowIndex) => {
    console.log('Добавление ячейки вправо для строки:', rowIndex);
    setGrid(prev => {
      const newGrid = [...prev];
      if (newGrid[rowIndex].length === 0) return newGrid;
      newGrid[rowIndex].push('Ячейка');
      return newGrid;
    });
  }, []);

  return (
    <div className="page-container">
      <h2>Editable Grid</h2>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <EditableCell
                key={colIndex}
                value={cell}
                onSave={(newValue) => handleSave(newValue, rowIndex, colIndex)}
                onAddCellDown={addNewCellDown}
                onAddCellRight={() => addNewCellRight(rowIndex)}
                rowIndex={rowIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
