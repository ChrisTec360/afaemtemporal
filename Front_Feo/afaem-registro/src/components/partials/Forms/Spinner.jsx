import React from 'react';

/**
 * SPINNER REUTILIZABLE (INDICADOR DE CARGA)
 * @param {string} size - 'small', 'medium', 'large'
 * @param {boolean} fullScreen - Ocupar toda la pantalla
 * @param {string} message - Mensaje de carga
 */
export default function Spinner({
  size = 'medium',
  fullScreen = false,
  message = '',
  color = '#0b4ea6',
  ...props
}) {
  const sizeMap = {
    small: '20px',
    medium: '40px',
    large: '60px',
  };

  const containerStyle = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      };

  const spinnerSize = sizeMap[size] || sizeMap.medium;

  return (
    <div style={containerStyle} {...props}>
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `3px solid ${color}20`,
          borderTopColor: color,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      >
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>

      {message && (
        <span
          style={{
            color: fullScreen ? 'white' : '#64748b',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          {message}
        </span>
      )}
    </div>
  );
}
