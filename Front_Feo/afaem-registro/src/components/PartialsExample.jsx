import React, { useState } from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  FormInput,
  Card,
  Alert,
  Badge,
  Modal,
  Spinner
} from './partials';

/**
 * EJEMPLO DE USO DE PARTIAL VIEWS
 * 
 * Esta página demuestra cómo usar todos los componentes reutilizables
 * que están disponibles en src/components/partials/
 */
export default function PartialsExample() {
  // ESTADO DEL FORMULARIO
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // ESTADO DE MODALES Y ALERTAS
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, type: 'success', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // VALIDAR FORMULARIO
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El email es requerido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // MANEJAR ENVÍO
  const handleSubmit = async () => {
    if (!validateForm()) {
      setShowAlert({
        show: true,
        type: 'error',
        message: 'Por favor corrige los errores en el formulario',
      });
      return;
    }

    setShowModal(true);
  };

  // CONFIRMAR ENVÍO
  const handleConfirm = async () => {
    setLoading(true);
    setShowModal(false);

    // Simular envío al servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setShowAlert({
      show: true,
      type: 'success',
      message: '¡Datos guardados correctamente!',
    });

    // Limpiar formulario
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  // MANEJAR CAMBIOS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar error del campo
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* ENCABEZADO */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ color: '#0b4ea6', fontSize: '28px', margin: '0 0 8px 0' }}>
          📚 Guía de Partial Views
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
          Ejemplos de componentes reutilizables que puedes usar en tu aplicación
        </p>
      </div>

      {/* ALERTAS */}
      {showAlert.show && (
        <Alert
          type={showAlert.type}
          message={showAlert.message}
          dismissible
          onClose={() => setShowAlert({ ...showAlert, show: false })}
          icon={showAlert.type === 'success' ? '✓' : '⚠'}
        />
      )}

      {/* SECCIÓN 1: FORMULARIO */}
      <Card title="1️⃣ Formulario con Inputs" subtitle="Componentes FormInput reutilizables">
        <FormInput
          label="Nombre Completo"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Escribe tu nombre"
          error={errors.name}
          required
          icon="👤"
        />

        <FormInput
          label="Correo Electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="correo@ejemplo.com"
          error={errors.email}
          required
          icon="📧"
        />

        <FormInput
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="●●●●●●●●"
          error={errors.password}
          required
          icon="🔒"
        />

        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
          <PrimaryButton 
            label="Enviar Datos"
            onClick={handleSubmit}
            loading={loading}
          />
          <SecondaryButton
            label="Limpiar"
            onClick={() => {
              setFormData({ name: '', email: '', password: '' });
              setErrors({});
            }}
          />
        </div>
      </Card>

      {/* SECCIÓN 2: BOTONES */}
      <Card
        title="2️⃣ Variaciones de Botones"
        subtitle="Botones primarios y secundarios en diferentes tamaños"
        style={{ marginTop: '24px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', margin: '0 0 8px' }}>
              PEQUEÑO
            </p>
            <PrimaryButton label="Pequeño" size="small" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', margin: '0 0 8px' }}>
              MEDIANO
            </p>
            <PrimaryButton label="Mediano" size="medium" />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', margin: '0 0 8px' }}>
              GRANDE
            </p>
            <PrimaryButton label="Grande" size="large" />
          </div>
        </div>

        <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SecondaryButton label="Secundario" size="small" />
          <SecondaryButton label="Secundario" size="medium" />
          <SecondaryButton label="Secundario" size="large" />
        </div>

        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
          <PrimaryButton label="Deshabilitado" disabled />
          <PrimaryButton label="Cargando..." loading />
        </div>
      </Card>

      {/* SECCIÓN 3: BADGES */}
      <Card
        title="3️⃣ Badges / Etiquetas"
        subtitle="Pequeñas etiquetas para estados y categorías"
        style={{ marginTop: '24px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Badge label="Éxito" type="success" icon="✓" />
          <Badge label="Error" type="error" icon="✕" />
          <Badge label="Advertencia" type="warning" icon="⚠" />
          <Badge label="Info" type="info" icon="ℹ" />
          <Badge label="Primario" type="primary" icon="★" />
          <Badge label="Gris" type="gray" />
        </div>

        <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Badge label="Pequeño" size="small" type="success" />
          <Badge label="Mediano" size="medium" type="success" />
        </div>
      </Card>

      {/* SECCIÓN 4: TARJETAS */}
      <Card
        title="4️⃣ Cards Reutilizables"
        subtitle="Tarjetas con efecto hover cuando son interactivas"
        style={{ marginTop: '24px' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '12px',
        }}>
          <Card 
            title="Tarjeta 1" 
            hoverable
            onClick={() => setShowAlert({ show: true, type: 'info', message: 'Hiciste click en Tarjeta 1' })}
          >
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Contenido de la tarjeta. Tiene efecto hover.
            </p>
          </Card>

          <Card 
            title="Tarjeta 2" 
            subtitle="Con subtítulo"
            hoverable
            onClick={() => setShowAlert({ show: true, type: 'info', message: 'Hiciste click en Tarjeta 2' })}
          >
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Más contenido aquí
            </p>
          </Card>

          <Card 
            title="Tarjeta 3" 
            hoverable
          >
            <Badge label="Destacada" type="primary" size="small" />
          </Card>
        </div>
      </Card>

      {/* SECCIÓN 5: TIPOS DE ALERTAS */}
      <Card
        title="5️⃣ Tipos de Alertas"
        subtitle="Diferentes variaciones de notificaciones"
        style={{ marginTop: '24px' }}
      >
        <Alert
          type="success"
          title="Éxito"
          message="La operación se completó correctamente"
          icon="✓"
        />

        <Alert
          type="error"
          title="Error"
          message="Ocurrió un error durante la operación"
          icon="✕"
        />

        <Alert
          type="warning"
          title="Advertencia"
          message="Debes tener cuidado con esta acción"
          icon="⚠"
        />

        <Alert
          type="info"
          title="Información"
          message="Este es un mensaje informativo"
          icon="ℹ"
          dismissible={false}
        />
      </Card>

      {/* MODAL DE CONFIRMACIÓN */}
      <Modal
        isOpen={showModal}
        title="Confirmar Datos"
        size="medium"
        onClose={() => setShowModal(false)}
        footer={
          <>
            <SecondaryButton
              label="Cancelar"
              onClick={() => setShowModal(false)}
            />
            <PrimaryButton
              label="Confirmar"
              onClick={handleConfirm}
              loading={loading}
            />
          </>
        }
      >
        <div style={{ marginBottom: '16px' }}>
          <p style={{ margin: '0 0 12px', fontWeight: '600' }}>
            ¿Confirmas los siguientes datos?
          </p>

          <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px' }}>
              <strong>📝 Nombre:</strong> {formData.name || '(vacío)'}
            </p>
            <p style={{ margin: '0 0 8px', fontSize: '12px' }}>
              <strong>📧 Email:</strong> {formData.email || '(vacío)'}
            </p>
            <p style={{ margin: 0, fontSize: '12px' }}>
              <strong>🔒 Contraseña:</strong> {'●'.repeat(formData.password.length) || '(vacía)'}
            </p>
          </div>
        </div>
      </Modal>

      {/* SPINNER */}
      {loading && <Spinner fullScreen message="Guardando información..." />}

      {/* FOOTER */}
      <div
        style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '12px',
        }}
      >
        <p>
          ✨ Estos componentes están listos para usarse en toda tu aplicación
        </p>
        <p style={{ fontSize: '11px', margin: '8px 0 0' }}>
          Importa desde <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '3px' }}>@/components/partials</code>
        </p>
      </div>
    </div>
  );
}
