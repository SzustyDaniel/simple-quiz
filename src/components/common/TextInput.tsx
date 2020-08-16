import React from "react";
import "../../styles/_controls.scss";

type TextInputProps = {
  label: string;
  value: string;
  onChange: any;
  maxLength: number;
  errors: string[];
};

const TextInput = ({
  label,
  value,
  onChange,
  maxLength,
  errors,
}: TextInputProps) => {
  let inputClass = "input-control ";

  if (errors.length > 0) {
    inputClass += "input-error";
  }

  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        maxLength={maxLength}
        className={inputClass}
        type='text'
        value={value}
        onChange={onChange}
      />
      {errors.map((error) => (
        <span className='error-text' key={error}>
          {error}
        </span>
      ))}
    </div>
  );
};

export default TextInput;
