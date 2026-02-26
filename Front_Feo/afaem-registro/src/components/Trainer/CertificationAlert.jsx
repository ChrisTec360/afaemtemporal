export default function CertificationAlert({ isCertified, onForceCertified }) {
  return (
    <section className="alert-section mt-4">
      {!isCertified ? (
        <div className="alert alert-warning" role="alert">
          <strong>Certificación pendiente:</strong> Completa tu certificación para poder registrar jugadores en tu equipo.
          <button 
            className="btn btn-sm btn-warning ms-2"
            onClick={onForceCertified}
          >
            Completar certificación (prueba)
          </button>
        </div>
      ) : (
        <div className="alert alert-success" role="alert">
          ✓ Tu cuenta está certificada. Puedes registrar jugadores y gestionar tus equipos.
        </div>
      )}
    </section>
  );
}
