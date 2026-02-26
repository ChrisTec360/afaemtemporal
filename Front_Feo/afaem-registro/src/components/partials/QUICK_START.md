<!-- GUÍA RÁPIDA: USANDO PARTIAL VIEWS EN TU PROYECTO -->

# 📚 Guía de Início Rápido - Partial Views

## 🎯 ¿Qué son los Partial Views?

Los **Partial Views** son componentes reutilizables pequeños y bien definidos que puedes usar en cualquier parte de tu aplicación. Son como bloques LEGO que construyen interfaces complejas.

---

## 📂 Ubicación de los Componentes

```
src/components/partials/
├── Buttons/
│   ├── PrimaryButton.jsx
│   └── SecondaryButton.jsx
├── Inputs/
│   └── FormInput.jsx
├── Cards/
│   ├── Card.jsx
│   └── Badge.jsx
├── Alerts/
│   └── Alert.jsx
├── Forms/
│   ├── Modal.jsx
│   └── Spinner.jsx
├── index.js          ← IMPORTA AQUÍ
└── README.md         ← DOCUMENTACIÓN COMPLETA
```

---

## 🚀 Cómo Importar

**OPCIÓN 1: Importar específicos**
```jsx
import { PrimaryButton, FormInput } from '@/components/partials';
```

**OPCIÓN 2: Importar todos**
```jsx
import * as PartialViews from '@/components/partials';
```

**OPCIÓN 3: Importar de forma relativa**
```jsx
import { PrimaryButton } from '../../partials';
```

---

## 💡 Ejemplos de Uso

### Botón Primario
```jsx
<PrimaryButton 
  label="Guardar"
  onClick={handleSave}
  loading={isLoading}
  size="large"
/>
```

### Input con Validación
```jsx
<FormInput
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
  icon="📧"
/>
```

### Tarjeta con Contenido
```jsx
<Card 
  title="Información del Equipo"
  subtitle="Detalles principales"
  hoverable
>
  <p>Contenido aquí...</p>
</Card>
```

### Badge / Etiqueta
```jsx
<Badge 
  label="Activo"
  type="success"
  icon="✓"
  size="medium"
/>
```

### Alerta
```jsx
<Alert
  type="success"
  title="¡Éxito!"
  message="Los datos se guardaron correctamente"
  dismissible
  icon="✓"
/>
```

### Modal
```jsx
<Modal
  isOpen={showModal}
  title="Confirmar Acción"
  size="medium"
  onClose={() => setShowModal(false)}
  footer={
    <>
      <SecondaryButton label="Cancelar" onClick={() => setShowModal(false)} />
      <PrimaryButton label="Confirmar" onClick={handleConfirm} />
    </>
  }
>
  <p>¿Estás seguro de continuar?</p>
</Modal>
```

### Spinner
```jsx
<Spinner 
  size="large"
  fullScreen
  message="Cargando..."
/>
```

---

## 🎨 Componentes Disponibles

| Componente | Props Principales | Casos de Uso |
|------------|------------------|------------------|
| **PrimaryButton** | size, loading, disabled, onClick | Acciones principales |
| **SecondaryButton** | size, disabled, onClick | Acciones secundarias |
| **FormInput** | label, error, icon, required, type | Formularios |
| **Card** | title, subtitle, hoverable | Agrupar contenido |
| **Badge** | label, type, size | Estados/etiquetas |
| **Alert** | type, title, message, dismissible | Notificaciones |
| **Modal** | isOpen, title, size, onClose | Diálogos |
| **Spinner** | size, fullScreen, message | Carga |

---

## 🔍 Ver el Ejemplo Completo

Tu aplicación tiene una **página de ejemplo interactiva** con todos los componentes:

```
http://localhost:5173/ejemplo-partials
```

Accede a esta URL para ver todos los componentes en acción.

---

## ✨ Mejores Prácticas

1. **Reutiliza componentes** - No repitas código, usa los partials
2. **Personaliza con props** - Modifica comportamiento mediante propiedades
3. **Combina componentes** - Usa múltiples partials juntos para crear COMPLEJinterfaces
4. **Mantén la documentación** - Lee [README.md](./README.md) para propiedades completas
5. **Importa todos a la vez** - Es más limpio que importar uno por uno

---

## 📝 Próximos Pasos

1. **Integra en AdminEquipo.jsx** - Reemplaza buttons y inputs manualmente
2. **Integra en RegistroJugadores.jsx** - Usa FormInput y PrimaryButton
3. **Crea más partials** - SelectInput, Textarea, Table, Pagination
4. **Revisa el README completo** - `/src/components/partials/README.md`

---

## 🆘 Necesitas Ayuda?

- **Documentación completa**: `/src/components/partials/README.md`
- **Página de ejemplo**: `/ejemplo-partials`  
- **Código fuente**: Mira cada archivo en `/src/components/partials/`

¡Felicidades! 🎉 Ya tienes un sistema robusto de componentes reutilizables.
