export default function ActionCard({ title, icon, onClick }) {
  return (
    <button className="action-card" onClick={onClick}>
      <div className="action-icon">{icon}</div>
      <div className="action-text">{title}</div>
    </button>
  );
}
