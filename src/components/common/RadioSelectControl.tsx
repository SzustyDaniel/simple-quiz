import React, { ChangeEvent } from "react";

type SelectProps = {
  label: string;
  selectedOption: string;
  options: string[];
  onOptionChange: any;
};

const RadioSelectControl = ({
  label,
  options,
  selectedOption,
  onOptionChange,
}: SelectProps) => {
  return (
    <div className='select__container'>
      <label className='select__label'>{label}</label>
      <div className='select__radio'>
        {options.map((option) => {
          return (
            <label key={option}>
              <input
                type='radio'
                checked={selectedOption === option}
                id={option}
                name={option}
                value={option}
                onChange={onOptionChange}
              />
              <span className='app-radio'></span>
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioSelectControl;
