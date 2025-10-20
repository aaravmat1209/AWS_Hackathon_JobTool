import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import JobOptionsPage from './pages/JobOptionsPage';
import ChatBotPage from './pages/ChatBotPage';
import UnsubscribePage from './pages/UnsubscribePage';
import { getOrCreateSessionId } from './services/agentService';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  // Hide navigation on unsubscribe page
  const showNavigation = !location.pathname.startsWith('/unsubscribe');

  return (
    <>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/job-options" element={<JobOptionsPage />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
      </Routes>
    </>
  );
}

function App() {
  // Initialize session ID on app mount/refresh
  useEffect(() => {
    const sessionId = getOrCreateSessionId();
    console.log('App initialized with session ID:', sessionId);
  }, []);

  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;