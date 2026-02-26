import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Trainer = lazy(() => import('./pages/Trainer/Trainer'));
const TrainerTeams = lazy(() => import('./pages/Teams/TrainerTeams'));
const TrainerPlayers = lazy(() => import('./pages/Players/TrainerPlayers'));
const CreateTeam = lazy(() => import('./pages/Teams/CreateTeam'));
const AdminEquipo = lazy(() => import('./pages/Teams/AdminEquipo'));
const InscribeTeamToLeague = lazy(() => import('./pages/Teams/InscribeTeamToLeague'));
const SolicitudesAdmin = lazy(() => import('./pages/Admin/SolicitudesAdmin'));
const RegistroJugadores = lazy(() => import('./pages/Players/RegistroJugadores'));
const ProximoEntrenador = lazy(() => import('./pages/Auth/ProximoEntrenador'));
const SignUp = lazy(() => import('./components/SignUp'));
const PreRegistroEntrenador = lazy(() => import('./pages/Auth/PreRegistroEntrenador'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'));
const PartialsExample = lazy(() => import('./components/PartialsExample'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:'center',marginTop:'40px'}}><span className="spinner" />Cargando...</div>}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registro-jugadores" element={<RegistroJugadores />} />
          <Route path="/proximo-entrenador" element={<ProximoEntrenador />} />
          <Route path="/pre-registro-entrenador" element={<PreRegistroEntrenador />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/trainer/teams" element={<TrainerTeams />} />
          <Route path="/trainer/players" element={<TrainerPlayers />} />
          <Route path="/crear-equipo" element={<CreateTeam />} />
          <Route path="/admin-equipo/:teamId" element={<AdminEquipo />} />
          <Route path="/inscribe-team-to-league/:teamId" element={<InscribeTeamToLeague />} />
          <Route path="/solicitudes-admin" element={<SolicitudesAdmin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/ejemplo-partials" element={<PartialsExample />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;