import afaemLogo from '../../assets/afaem-logo@4x.png';

export default function TrainerSidebar({ onLogout, sidebarActive }) {
  return (
    <aside className={`trainer-sidebar ${sidebarActive ? 'active' : 'collapsed'}`}>
      <div className="sidebar-header">
        <img src={afaemLogo} alt="AFAEM" className="sidebar-logo" />
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <i className="bi bi-house-fill"></i>
          <span>Inicio</span>
        </a>
        <a href="#" className="nav-item">
          <i className="bi bi-shield-fill"></i>
          <span>Equipos</span>
        </a>
        <div className="nav-divider"></div>
        <a href="#" className="nav-item">
          <i className="bi bi-circle-fill" style={{fontSize: '0.6rem'}}></i>
          <span>Real Huexca</span>
        </a>
        <a href="#" className="nav-item">
          <i className="bi bi-circle-fill" style={{fontSize: '0.6rem'}}></i>
          <span>AJAX Altos de Morelos</span>
        </a>
        <div className="nav-divider"></div>
        <a href="#" className="nav-item">
          <i className="bi bi-gear-fill"></i>
          <span>Configuración</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <button 
          className="btn-logout"
          onClick={onLogout}
          title="Cerrar sesión"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Salir</span>
        </button>
      </div>
    </aside>
  );
}
