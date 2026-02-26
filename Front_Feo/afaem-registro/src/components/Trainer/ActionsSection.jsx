import ActionCard from './ActionCard';

export default function ActionsSection({ onCreateTeam, onJoinTeam, onRegisterMembers }) {
  return (
    <section className="action-section">
      <h3 className="section-title">¿Qué quieres hacer hoy?</h3>
      <div className="row g-3">
        <div className="col-md-4">
          <ActionCard 
            title="Crea equipo nuevo"
            icon="🛡️"
            onClick={onCreateTeam}
          />
        </div>
        <div className="col-md-4">
          <ActionCard 
            title="Inscribir equipo a liga"
            icon="🏆"
            onClick={onJoinTeam}
          />
        </div>
        <div className="col-md-4">
          <ActionCard 
            title="Registrar integrantes"
            icon="👥"
            onClick={onRegisterMembers}
          />
        </div>
      </div>
    </section>
  );
}
