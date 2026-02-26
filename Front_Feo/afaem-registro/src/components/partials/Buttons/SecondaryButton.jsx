import React from 'react';

/**
 * BOTÓN SECUNDARIO REUTILIZABLE
 * @param {string} label - Texto del botón
 * @param {function} onClick - Función al hacer click
 * @param {boolean} disabled - Deshabilitado o no
 * @param {string} size - 'small', 'medium', 'large'
 */
export default function SecondaryButton({
  label = 'Cancelar',
  onClick,
  disabled = false,
  size = 'medium',
  className = '',
  type = 'button',
  ...props
}) {
  const sizeStyles = {
    small: { padding: '6px 12px', fontSize: '12px' },
    medium: { padding: '10px 20px', fontSize: '14px' },
    large: { padding: '14px 28px', fontSize: '16px' },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        backgroundColor: 'white',
        color: '#0b4ea6',
        border: '1.5px solid #0b4ea6',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: '700',
        transition: 'all 0.2s',
        opacity: disabled ? 0.6 : 1,
        ...sizeStyles[size],
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = '#dbeafe';
          e.target.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = 'white';
          e.target.style.transform = 'translateY(0)';
        }
      }}
      {...props}
    >
      {label}
    </button>
  );
}
