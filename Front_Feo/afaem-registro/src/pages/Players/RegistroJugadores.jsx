import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import { PrimaryButton, SecondaryButton } from '../../components/partials';
import '../../styles/dashboard.css';

export default function RegistroJugadores() {
  const navigate = useNavigate();
  const location = useLocation();
  const teamId = location.state?.teamId;
  const userEmail = localStorage.getItem('email');
  const [documents, setDocuments] = useState({
    actaNacimiento: null,
    identificacion: null,
    fotografia: null,
    formatoAfiliacion: null
  });

  const [extractedData, setExtractedData] = useState({
    nombreJugador: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: '',
    edad: '',
    direccion: ''
  });

  const [uploading, setUploading] = useState(false);

  const documentTypes = [
    {
      key: 'actaNacimiento',
      title: 'Acta de nacimiento',
      icon: '📋',
      requirements: [
        'Digitalización clara',
        'Documento legible',
        'Incluya sello o firma oficial'
      ]
    },
    {
      key: 'identificacion',
      title: 'Identificación',
      icon: '🆔',
      requirements: [
        'Documento vigente o reciente',
        'Imagen completa',
        'Legible'
      ]
    },
    {
      key: 'fotografia',
      title: 'Fotografía del jugador',
      icon: '📸',
      requirements: [
        'Tomada frontalmente',
        'Fondo blanco o neutral que implique identificación',
        'En posición vertical',
        'Bien encuadrada y enfocada'
      ]
    },
    {
      key: 'formatoAfiliacion',
      title: 'Formato de afiliación',
      icon: '📝',
      requirements: [
        'Documento suscrito',
        'Digitalización completa',
        'Incluya fotografía',
        'Vigente a la temporada actual'
      ]
    }
  ];

  const handleFileUpload = (documentKey, file) => {
    if (file) {
      setDocuments(prev => ({
        ...prev,
        [documentKey]: file
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = '#dbeafe';
    e.currentTarget.style.borderColor = '#0b4ea6';
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.borderColor = '#e2e8f0';
  };

  const handleDrop = (e, documentKey) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.borderColor = '#e2e8f0';
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(documentKey, file);
    }
  };

  const handleSubmit = async () => {
    // Aquí irá la lógica para enviar los documentos al OCR
    // Por ahora solo es la vista
    setUploading(true);
    
    // Simulación de carga
    setTimeout(() => {
      // Datos de ejemplo que se mostrarían después del OCR
      setExtractedData({
        nombreJugador: 'Pedro',
        apellidoPaterno: 'Ramírez',
        apellidoMaterno: 'López',
        genero: 'Masculino',
        edad: '25',
        direccion: 'José María 505, Col. Morelos, Cuautla, Morelos'
      });
      setUploading(false);
    }, 2000);
  };

  return (
    <div className="dashboard-wrapper">
      <DashboardSidebar userEmail={userEmail} />
      
      <div className="dashboard-container">
        <DashboardHeader userEmail={userEmail} pageTitle="Registrar jugador" />
        
        <div className="dashboard-main">
          <div className="dashboard-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* HEADER */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '30px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  flexShrink: 0
                }}>
                  ⚽
                </div>
                <div style={{ flex: 1 }}>
                  <h1 style={{
                    margin: '0 0 8px 0',
                    color: '#0b4ea6',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}>
                    Registrar jugador
                  </h1>
                  <p style={{
                    margin: '0',
                    color: '#64748b',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.5'
                  }}>
                    Sube el documento oficial para completar automáticamente la información del jugador.
                  </p>
                </div>
              </div>
            </div>

            {/* TARJETAS DE DOCUMENTOS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {documentTypes.map((doc) => (
                <div
                  key={doc.key}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '2px dashed #e2e8f0',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, doc.key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* ÍCONO Y TÍTULO */}
                  <div>
                    <div style={{
                      fontSize: '40px',
                      marginBottom: '12px'
                    }}>
                      {doc.icon}
                    </div>
                    <h3 style={{
                      margin: '0 0 12px 0',
                      color: '#1e293b',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {doc.title}
                    </h3>
                    
                    {/* ESTADO DE CARGA */}
                    {documents[doc.key] ? (
                      <div style={{
                        backgroundColor: '#dcfce7',
                        color: '#166534',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        marginBottom: '12px',
                        border: '1px solid #86efac'
                      }}>
                        ✓ {documents[doc.key].name}
                      </div>
                    ) : (
                      <div style={{
                        backgroundColor: '#fef3c7',
                        color: '#92400e',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        marginBottom: '12px',
                        border: '1px solid #fcd34d'
                      }}>
                        Pendiente
                      </div>
                    )}
                  </div>

                  {/* REQUISITOS */}
                  <div style={{
                    textAlign: 'left',
                    marginBottom: '12px'
                  }}>
                    {doc.requirements.map((req, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          marginBottom: '8px',
                          fontSize: '11px',
                          color: '#64748b',
                          fontWeight: '500'
                        }}
                      >
                        <input
                          type="checkbox"
                          disabled
                          style={{
                            marginTop: '2px',
                            flexShrink: 0
                          }}
                        />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>

                  {/* INPUT OCULTO */}
                  <input
                    type="file"
                    id={`file-${doc.key}`}
                    accept="image/*,.pdf"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileUpload(doc.key, e.target.files[0])}
                  />

                  {/* BOTÓN PARA SUBIR */}
                  <button
                    onClick={() => document.getElementById(`file-${doc.key}`).click()}
                    style={{
                      backgroundColor: '#0b4ea6',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '700',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0a3d85';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0b4ea6';
                    }}
                  >
                    <FaUpload style={{ marginRight: '6px' }} />
                    Subir archivo
                  </button>
                </div>
              ))}
            </div>

            {/* DATOS EXTRAÍDOS - ESTILO SIMPLE */}
            {(extractedData.nombreJugador || Object.values(documents).some(d => d !== null)) && (
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px',
                marginBottom: '30px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  rowGap: '16px'
                }}>
                  <div>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Nombre jugador:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.nombreJugador || '-'}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Apellido paterno:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.apellidoPaterno || '-'}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Apellido materno:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.apellidoMaterno || '-'}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Género:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.genero || '-'}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Edad:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.edad || '-'}
                    </span>
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <span style={{
                      fontWeight: '700',
                      color: '#1e293b',
                      fontSize: '14px'
                    }}>
                      Dirección:
                    </span>
                    <span style={{
                      marginLeft: '8px',
                      color: '#64748b',
                      fontSize: '14px'
                    }}>
                      {extractedData.direccion || '-'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* BOTONES DE ACCIÓN */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <PrimaryButton
                label={`${uploading ? '⏳ Subiendo...' : '📤 Subir documentos'}`}
                onClick={handleSubmit}
                disabled={uploading}
                style={{
                  minWidth: '200px'
                }}
              />
              <SecondaryButton
                label="← Regresar"
                onClick={() => navigate(teamId ? `/admin-equipo/${teamId}` : '/trainer/teams')}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
