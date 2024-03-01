import React from 'react';

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  validation?: RegExp;
  errorMessage?: string;
  value: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  validation,
  errorMessage,
  value,
  onChange,
  id,
}) => {
  const handleValidation = (value: string) => {
    if (validation && !validation.test(value)) {
      return <span className='error-message'>{errorMessage}</span>;
    }
    return null;
  };

  return (
    <div>
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className='form-control'
      />
      {validation && errorMessage && handleValidation(value)}
    </div>
  );
};

export default Input;
