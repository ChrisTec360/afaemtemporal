import React from 'react';

/**
 * MODAL REUTILIZABLE
 * @param {boolean} isOpen - Si el modal está abierto
 * @param {string} title - Título del modal
 * @param {React.ReactNode} children - Contenido
 * @param {function} onClose - Función al cerrar
 * @param {React.ReactNode} footer - Contenido del pie (botones)
 */
export default function Modal({
  isOpen = false,
  title = '',
  children,
  onClose,
  footer,
  size = 'medium',
  className = '',
  ...props
}) {
  if (!isOpen) return null;

  const sizeStyles = {
    small: { maxWidth: '400px' },
    medium: { maxWidth: '600px' },
    large: { maxWidth: '800px' },
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
      >
        {/* MODAL */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={className}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
            ...sizeStyles[size],
            maxHeight: '90vh',
            overflow: 'auto',
          }}
          {...props}
        >
          {/* HEADER */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '700',
                color: '#0b4ea6',
              }}
            >
              {title}
            </h2>
            {onClose && (
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* BODY */}
          <div style={{ padding: '24px' }}>{children}</div>

          {/* FOOTER */}
          {footer && (
            <div
              style={{
                padding: '16px 24px',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
              }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
