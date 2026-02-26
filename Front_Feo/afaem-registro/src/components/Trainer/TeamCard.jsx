export default function TeamCard({ team, onAdmin }) {
  return (
    <div className="team-card">
      <div className="team-card-body">
        <div className="team-header">
          <div className="team-logo">{team.logo}</div>
          <div className="team-info">
            <h5 className="team-name">{team.name}</h5>
            <p className="team-modality">
              <strong>Modalidad:</strong> {team.modality}
            </p>
          </div>
        </div>

        <div className="team-stats">
          <div className="stat">
            <span className="stat-label">Jugadores:</span>
            <span className="stat-value">{team.players}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Entrenadores:</span>
            <span className="stat-value">{team.trainers}</span>
          </div>
        </div>

        <div className="team-footer">
          <span 
            className="team-status"
            style={{ backgroundColor: team.statusColor }}
          >
            {team.status}
          </span>
          <button 
            className="btn-admin"
            onClick={() => onAdmin(team.id)}
          >
            Administrar
          </button>
        </div>
      </div>
    </div>
  );
}
