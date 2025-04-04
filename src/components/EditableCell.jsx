import React, { useState, useEffect, useRef } from 'react';

export const EditableCell = ({ 
  value, 
  onSave, 
  onAddCellDown, 
  onAddCellRight, 
  rowIndex 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);
  const cellRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cellRef.current && !cellRef.current.contains(e.target)) {
        saveValue();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [inputValue]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveValue();
    }
    
    if (e.ctrlKey && e.key === 'ArrowDown') {
      e.preventDefault();
      onAddCellDown();
    }
    
    if (e.ctrlKey && e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      onAddCellRight();
    }
  };

  const saveValue = () => {
    onSave(inputValue);
    setIsEditing(false);
  };

  return (
    <div 
      ref={cellRef} 
      onClick={() => setIsEditing(true)}
      className="editable-cell"
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={saveValue}
          onKeyDown={handleKeyPress}
          className="cell-input"
        />
      ) : (
        <div className="cell-value">{value}</div>
      )}
    </div>
  );
};
