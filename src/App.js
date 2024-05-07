import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:userType" element={<UserHome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/NavBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import UserHome from './pages/UserHome';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

// function App() {
//   return (
//     <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home/user" element={<UserHome />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer/>
//     </Router>
//   );
// }

// export default App;
