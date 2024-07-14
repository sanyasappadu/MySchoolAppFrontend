import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import LeaveForm from './components/LeaveForm';
import GamesForm from './components/GamesForm';
import AdmissionForm from './components/AdmissionForm';
import ComplaintForm from './components/ComplaintForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaveform" element={<LeaveForm/>} />
        <Route path="/gamesform" element={<GamesForm/>} />
        <Route path="/complaintform" element={<ComplaintForm/>} />
        <Route path="/admissionform" element={<AdmissionForm/>} />

        <Route path="/home/:userEmail" element={<UserHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/blogs" element={isAuthenticated ? <Blogs /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
