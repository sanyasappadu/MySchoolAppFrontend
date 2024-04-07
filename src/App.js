import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/home/:userType" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
