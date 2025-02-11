import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import HomePage from './componentes/HomePage';
import ProjectsPage from './componentes/ProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Asegúrate de usar "element" aquí */}
      </Routes>
    </Router>
  );
}

export default App;
