import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const DropDown = ({ label, name, defaultValue = '', required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [['', 'Select an option', true], ...Object.entries(options)];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <label htmlFor={name} className='flex flex-col my-6'>
      <span>{label}</span>
      <select
        required={required}
        name={name}
        className='input'
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {optionsSelect.map((o) => {
          return (
            <option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
              {o[1]}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default DropDown;
