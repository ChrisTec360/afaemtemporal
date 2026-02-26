export default function TrainerHeader({ userName, isCertified, onToggleSidebar }) {
  return (
    <header className="trainer-header">
      <div className="header-left">
        <button 
          className="btn-toggle-sidebar d-lg-none"
          onClick={onToggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>
        <div>
          <h2 className="header-title">Bienvenido, {userName}</h2>
          <p className="header-subtitle">Presidente de Equipo</p>
        </div>
      </div>
      <div className="header-right">
        <div className="profile-menu">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Perfil" 
            className="profile-avatar"
          />
          {isCertified && (
            <span className="badge bg-success">Certificado</span>
          )}
        </div>
      </div>
    </header>
  );
}
