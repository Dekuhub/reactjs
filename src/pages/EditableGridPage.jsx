import React, { useState, useCallback } from 'react';
import { EditableCell } from '../components/EditableCell';

export const EditableGridPage = () => {
  const [values, setValues] = useState(['Ячейка 1']);

  const handleSave = useCallback((newValue, index) => {
    setValues(prev => prev.map((val, i) => i === index ? newValue : val));
  }, []);

  const addNewCell = useCallback(() => {
    setValues(prev => [...prev, `Ячейка ${prev.length + 1}`]);
  }, []);

  return (
    <div className="page-container">
      <h2>Editable Grid</h2>
      <div className="grid-container">
        {values.map((value, index) => (
          <EditableCell
            key={index}
            value={value}
            index={index}
            onSave={handleSave}
            onAddCell={addNewCell}
          />
        ))}
      </div>
    </div>
  );
};
