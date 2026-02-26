// COMPONENTE REUTILIZABLE PARA INPUTS DE FORMULARIO CON ACCESIBILIDAD Y ESTILOS
import React from 'react';

const FormInput = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  autoComplete,
  ...props
}) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`form-control${error ? ' is-invalid' : ''}`}
      aria-required={required}
      aria-invalid={!!error}
      autoComplete={autoComplete}
      {...props}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default FormInput;
