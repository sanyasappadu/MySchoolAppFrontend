import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Login from './pages/Login';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:userType" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
