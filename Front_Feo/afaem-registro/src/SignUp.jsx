
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AfaemLogo from './assets/afaem-logo@4x.png';
import AmateurLogo from './assets/amateur-logo.png';
import FmfLogo from './assets/fmf-logo.png';
import { API_BASE } from './config';
import { apiRegister } from './api';
import { computePasswordRequirements, validateField } from './formUtils';

function SignUp() {
        // DECLARACIÓN DE ESTAODS ANTES DE CUALQUIER USO  
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
          Nombre: '',
          PrimerApellido: '',
          SegundoApellido: '',
          Correo: '',
          NumeroTelefono: '',
          Contrasena: '',
          confirmarContrasena: '',
          aceptaPoliticas: false,
        });
        const [errors, setErrors] = useState({});
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);
        const [err, setErr] = useState(null);
        // VALIDACIÓN DE REQUISITOS DE CONTRASEÑA
        function computePasswordRequirements(pw) {
          const value = pw || '';
          const rules = {
            minLen: value.length >= 6,
            hasLower: /[a-z]/.test(value),
            hasUpper: /[A-Z]/.test(value),
            hasDigit: /\d/.test(value),
            hasSpecial: /[^A-Za-z0-9]/.test(value),
          };
          const score = Object.values(rules).reduce((s, v) => s + (v ? 1 : 0), 0);
          return { rules, score };
        }

        const [pwInfo, setPwInfo] = useState({ rules: { minLen: false, hasLower: false, hasUpper: false, hasDigit: false, hasSpecial: false }, score: 0 });

        useEffect(() => {
          setPwInfo(computePasswordRequirements(formData.Contrasena));
        }, [formData.Contrasena]);

  import { computePasswordRequirements, validateField } from './formUtils';
        // VALIDACIÓN DE CAMPOS
        const validateField = (name, value) => {
          if (name === 'Contrasena') {
            const pw = value || '';
            if (!pw) return 'La contraseña es obligatoria';
            if (pw.length < 6) return 'Debe tener mínimo 6 caracteres';
            if (!/[a-z]/.test(pw)) return 'Debe tener al menos una minúscula';
            if (!/[A-Z]/.test(pw)) return 'Debe tener al menos una mayúscula';
            if (!/\d/.test(pw)) return 'Debe tener al menos un número';
            if (!/[^A-Za-z0-9]/.test(pw)) return 'Debe tener al menos un símbolo';
            return '';
          }
          if (name === 'confirmarContrasena') {
            if (!value) return 'Confirma la contraseña';
            if (value !== formData.Contrasena) return 'Las contraseñas no coinciden';
            return '';
          }
          // VALIDACIÓN DE REQUISITOS DE CONTRASEÑA CENTRALIZADA
          return '';
        };

        // ACTUALIZAR ERRORES AL CAMBIAR INPUTS
        const handleChange = (e) => {
          // VALIDACIÓN DE CAMPOS
          const validateField = (name, value, formData) => {
            if (name === 'Contrasena') {
              const pw = value || '';
              if (!pw) return 'La contraseña es obligatoria';
              if (pw.length < 6) return 'Debe tener mínimo 6 caracteres';
              if (!/[a-z]/.test(pw)) return 'Debe tener al menos una minúscula';
              if (!/[A-Z]/.test(pw)) return 'Debe tener al menos una mayúscula';
              if (!/\d/.test(pw)) return 'Debe tener al menos un número';
              if (!/[^A-Za-z0-9]/.test(pw)) return 'Debe tener al menos un símbolo';
              return '';
            }
            if (name === 'confirmarContrasena') {
              if (!value) return 'Confirma la contraseña';
              if (value !== formData.Contrasena) return 'Las contraseñas no coinciden';
              return '';
            }
            if (name === 'Correo') {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!String(value || '').trim()) return 'El correo es obligatorio';
              import React, { useState, useEffect } from 'react';
              import { Link, useNavigate } from 'react-router-dom';
              import AfaemLogo from './assets/afaem-logo@4x.png';
              import AmateurLogo from './assets/amateur-logo.png';
              import FmfLogo from './assets/fmf-logo.png';
              import { API_BASE } from './config';
              import { apiRegister } from './api';
              import { computePasswordRequirements, validateField } from './formUtils';
              return '';
            }
            return '';
          };
      if (Object.values(newErrors).some(Boolean)) return;

      setLoading(true);
      try {
        const payload = {
          Nombre: formData.Nombre,
          PrimerApellido: formData.PrimerApellido,
          SegundoApellido: formData.SegundoApellido,
          Correo: formData.Correo,
          Contrasena: formData.Contrasena,
          NumeroTelefono: formData.NumeroTelefono
        };
        const res = await apiRegister(payload);
        if (res.ok) {
          setSuccess(true);
          setTimeout(() => navigate('/login'), 1800);
        } else {
          setErr(res.json?.detail || 'Error en el registro.');
        }
      } catch {
        setErr('Error de red o del servidor.');
      } finally {
        setLoading(false);
      }
    };
            <>
              <div className="form-field col-span-2">
                <label>Contraseña *</label>
                <input type="password" name="Contrasena" value={formData.Contrasena} onChange={handleChange} className="form-input" style={{ borderRadius: 8, padding: '8px 12px', fontSize: 16 }} />
        newErrors.Contrasena = validateField('Contrasena', formData.Contrasena, formData);
        newErrors.confirmarContrasena = validateField('confirmarContrasena', formData.confirmarContrasena, formData);
                  <div className="pw-bar"><div className="pw-bar-inner" style={{ width: `${(pwInfo.score/5)*100}%` }} /></div>
                  <div style={{ display:'flex', gap:8, marginTop:6, flexWrap:'wrap' }}>
                    <div style={{ fontSize:12 }}>{pwInfo.rules.minLen ? '✅' : '⬜'} 6+ caracteres</div>
                    <div style={{ fontSize:12 }}>{pwInfo.rules.hasLower ? '✅' : '⬜'} minúscula</div>
                    <div style={{ fontSize:12 }}>{pwInfo.rules.hasUpper ? '✅' : '⬜'} mayúscula</div>
                    <div style={{ fontSize:12 }}>{pwInfo.rules.hasDigit ? '✅' : '⬜'} número</div>
                    <div style={{ fontSize:12 }}>{pwInfo.rules.hasSpecial ? '✅' : '⬜'} carácter especial</div>
                  </div>
                </div>
              </div>
              <div className="form-field col-span-2">
                <label>Confirmar Contraseña *</label>
                <input type="password" name="confirmarContrasena" value={formData.confirmarContrasena} onChange={handleChange} className="form-input" style={{ borderRadius: 8, padding: '8px 12px', fontSize: 16 }} />
                {errors.confirmarContrasena && <span className="form-error">{errors.confirmarContrasena}</span>}
              </div>
            </>


  /*
  const handleSendVerification = async () => {
    if (!formData.correo || errors.correo) {
      setErrors(e => ({ ...e, correo: 'Ingresa un correo válido antes de verificar.' }));
            // ...existing code...

  /*
  const handleConfirmCode = (e) => {
    e.preventDefault();
    if (codigoUsuario.trim() === verificationCode) {
      setVerified(true);
      alert('Correo verificado. Ahora puedes completar el registro.');
    } else alert('Código incorrecto. Verifica el correo e inténtalo de nuevo.');
  };
  */


  return (
    <div className="signup">
      <style>{`
        .signup { display:flex; justify-content:center; padding:12px; box-sizing:border-box; }
        .card {
          position:relative;
          overflow:visible;
          width:100%;
          max-width:920px;
          background:#fff;
          border-radius:12px;
          padding:18px;
          box-shadow:0 12px 40px rgba(2,10,34,0.06);
        }
        .card-logos{ position:absolute; top:12px; left:12px; right:12px; display:flex; justify-content:space-between; align-items:center; pointer-events:none; user-select:none; z-index:10003; }
        .left-logo{ height:64px; max-width:160px; object-fit:contain; } 
        .right-logos{ display:flex; gap:12px; align-items:center; pointer-events:none; }
        .right-logos img { height:48px; max-height:64px; object-fit:contain; } 
        .form-grid{ display:grid; grid-template-columns:repeat(12,1fr); gap:8px 12px; }
        .form-field.col-span-2{ grid-column: span 6; } .form-field.col-span-1{ grid-column: span 3; } .form-field.col-span-3{ grid-column: span 9; } .form-field.col-span-4{ grid-column: span 12; }
        .form-label{ font-size:11px; margin-bottom:6px; font-weight:700; color:#25303b; text-transform:uppercase; }
        .form-input{ width:100%; padding:8px 10px; border-radius:8px; height:36px; border:1px solid rgba(10,10,10,0.9); box-sizing:border-box; }
              .btn-primary{ display:block; width:100%; max-width:480px; margin:8px auto 0; padding:11px 16px; font-weight:700; background:linear-gradient(180deg,#3d79ff,#1e5be6); color:#fff; border-radius:12px; border:none; cursor:pointer; position:relative; }
              .spinner {
                display: inline-block;
                width: 22px;
                height: 22px;
                border: 3px solid #fff;
                border-top: 3px solid #3d79ff;
                border-radius: 50%;
                animation: spin 0.7s linear infinite;
                vertical-align: middle;
                margin-right: 8px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .form-error{ color:#c00; font-size:12px; margin-top:4px; display:block; animation: fadeIn 0.5s; }
              .invalid-feedback, .alert-success, .alert-danger { animation: fadeIn 0.5s; }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-8px); }
                to { opacity: 1; transform: translateY(0); }
              }
        @media (max-width:900px){ .card-logos{ display:none !important; } .form-field.col-span-3,.form-field.col-span-2,.form-field.col-span-1{ grid-column: span 12; } }
      `}</style>
      <div className="container py-4 position-relative">
        {/* LOGOS LATERALES SOLO VISIBLES EN DESKTOP */}
        <div className="d-none d-md-flex justify-content-between align-items-center position-absolute w-100" style={{ top: '32px', left: 0, right: 0, pointerEvents: 'none', zIndex: 10 }}>
          <img src={AfaemLogo} alt="AFAEM" style={{ height: 72, maxWidth: 180, objectFit: 'contain', opacity: 0.95, marginLeft: 0 }} />
          <div className="d-flex gap-4 align-items-center">
            <img src={AmateurLogo} alt="Amateur" style={{ height: 56, maxWidth: 120, objectFit: 'contain', opacity: 0.95 }} />
            <img src={FmfLogo} alt="FMF" style={{ height: 56, maxWidth: 120, objectFit: 'contain', opacity: 0.95 }} />
          </div>
        </div>
        <div className="card shadow-lg mx-auto" style={{ maxWidth: 600, zIndex: 10000 }}>
          <div className="card-body">
            <h2 className="text-center mb-4" style={{ fontWeight: 700, fontSize: 28 }}>Crear cuenta</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                        <label className="form-label" htmlFor="nombreInput">Nombre *</label>
                        <input id="nombreInput" name="Nombre" value={formData.Nombre} onChange={handleChange} className={`form-control${errors.Nombre ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.Nombre} tabIndex={0} />
                  {errors.Nombre && <div className="invalid-feedback">{errors.Nombre}</div>}
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="primerApellidoInput">Primer Apellido *</label>
                        <input id="primerApellidoInput" name="PrimerApellido" value={formData.PrimerApellido} onChange={handleChange} className={`form-control${errors.PrimerApellido ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.PrimerApellido} tabIndex={0} />
                  {errors.PrimerApellido && <div className="invalid-feedback">{errors.PrimerApellido}</div>}
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="segundoApellidoInput">Segundo Apellido</label>
                        <input id="segundoApellidoInput" name="SegundoApellido" value={formData.SegundoApellido} onChange={handleChange} className="form-control" tabIndex={0} />
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="correoInput">Correo *</label>
                        <input id="correoInput" name="Correo" value={formData.Correo} onChange={handleChange} className={`form-control${errors.Correo ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.Correo} tabIndex={0} autoComplete="email" />
                  {errors.Correo && <div className="invalid-feedback">{errors.Correo}</div>}
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="telefonoInput">Número Teléfono *</label>
                        <input id="telefonoInput" name="NumeroTelefono" value={formData.NumeroTelefono} onChange={handleChange} className={`form-control${errors.NumeroTelefono ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.NumeroTelefono} tabIndex={0} autoComplete="tel" />
                  {errors.NumeroTelefono && <div className="invalid-feedback">{errors.NumeroTelefono}</div>}
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="contrasenaInput">Contraseña *</label>
                        <input id="contrasenaInput" type="password" name="Contrasena" value={formData.Contrasena} onChange={handleChange} className={`form-control${errors.Contrasena ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.Contrasena} tabIndex={0} autoComplete="new-password" />
                  {errors.Contrasena && <div className="invalid-feedback">{errors.Contrasena}</div>}
                  <div className="mt-2">
                    <div className="progress" style={{ height: 6 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: `${(pwInfo.score/5)*100}%` }} />
                    </div>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <small>{pwInfo.rules.minLen ? '✅' : '⬜'} 6+ caracteres</small>
                      <small>{pwInfo.rules.hasLower ? '✅' : '⬜'} minúscula</small>
                      <small>{pwInfo.rules.hasUpper ? '✅' : '⬜'} mayúscula</small>
                      <small>{pwInfo.rules.hasDigit ? '✅' : '⬜'} número</small>
                      <small>{pwInfo.rules.hasSpecial ? '✅' : '⬜'} carácter especial</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                        <label className="form-label" htmlFor="confirmarContrasenaInput">Confirmar Contraseña *</label>
                        <input id="confirmarContrasenaInput" type="password" name="confirmarContrasena" value={formData.confirmarContrasena} onChange={handleChange} className={`form-control${errors.confirmarContrasena ? ' is-invalid' : ''}`} aria-required="true" aria-invalid={!!errors.confirmarContrasena} tabIndex={0} autoComplete="new-password" />
                  {errors.confirmarContrasena && <div className="invalid-feedback">{errors.confirmarContrasena}</div>}
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className={`form-check-input${errors.aceptaPoliticas ? ' is-invalid' : ''}`}
                      type="checkbox"
                      name="aceptaPoliticas"
                      checked={formData.aceptaPoliticas}
                      onChange={handleChange}
                      id="aceptaPoliticas"
                    />
                    <label className="form-check-label" htmlFor="aceptaPoliticas">
                      He leído y acepto la
                      <a href="/privacidad" target="_blank" rel="noopener noreferrer" className="ms-1">Política de Privacidad</a>,
                      <a href="/terminos" target="_blank" rel="noopener noreferrer" className="ms-1">Términos y Condiciones</a>
                      y la
                      <a href="/responsabilidad" target="_blank" rel="noopener noreferrer" className="ms-1">Responsabilidad Limitada de AFAEM</a>.
                    </label>
                    {errors.aceptaPoliticas && <div className="invalid-feedback d-block">{errors.aceptaPoliticas}</div>}
                  </div>
                </div>
                <div className="col-12 mt-3">
                        <button className="btn btn-primary w-100" type="submit" disabled={loading} style={{ fontSize: 18 }}>
                          {loading && <span className="spinner" />} {loading ? 'Registrando...' : 'Registrarse'}
                        </button>
                </div>
                {err && <div className="alert alert-danger mt-3 w-100">{err}</div>}
                {success && <div className="alert alert-success mt-3 w-100">¡Registro exitoso! Redirigiendo...</div>}
              </div>
            </form>
            <div className="text-center mt-4">
              <span>¿Ya tienes cuenta? <Link to="/login" className="fw-semibold">Inicia sesión</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SignUp;
