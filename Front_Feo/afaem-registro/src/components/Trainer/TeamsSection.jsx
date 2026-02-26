import TeamCard from './TeamCard';

export default function TeamsSection({ teams, onAdminTeam }) {
  return (
    <section className="teams-section">
      <h3 className="section-title">Panel de equipos</h3>
      <div className="row g-4">
        {teams.map((team) => (
          <div key={team.id} className="col-md-6">
            <TeamCard 
              team={team} 
              onAdmin={onAdminTeam}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
