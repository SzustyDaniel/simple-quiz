import React from "react";
import "../../styles/_controls.scss";

type SelectProps = {
  options: string[];
  onChange: any;
  selectedOption: string;
  label: string;
};

const SelectControl = ({
  options,
  onChange,
  selectedOption,
  label,
}: SelectProps) => {
  return (
    <div className='select-container'>
      <label className='select-label'>{label}</label>
      <select
        className='select-control'
        name={label}
        onChange={onChange}
        value={selectedOption}>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectControl;
