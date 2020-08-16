import React from "react";
import "../../styles/_buttons.scss";

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
    <div className='radio__container-main'>
      <label className='radio__label-main'>{label}</label>
      <div className='radio__controls'>
        {options.map((option) => {
          return (
            <label key={option} className='radio__container'>
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
