import React from "react";
import "../../styles/_controls.scss";

type TextInputProps = {
  label: string;
  value: string;
  onChange: any;
  maxLength: number;
};

const TextInput = ({ label, value, onChange, maxLength }: TextInputProps) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        maxLength={maxLength}
        className='input-control'
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
