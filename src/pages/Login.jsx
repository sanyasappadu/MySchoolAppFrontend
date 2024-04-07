import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const [users, setUsers] = useState([]);
  // const history = useHistory(); // Initialize useHistory

  const handleSignup = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Check if email already exists
    if (users.some(user => user.email === email)) {
      alert('Email already exists. Please use a different email.');
      return;
    }
    // Create new user object
    const newUser = {
      email,
      password,
      userType
    };
    // Add new user to the array
    setUsers([...users, newUser]);
    // Clear input fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUserType('');
    // Show success message
    alert('User signed up successfully!');
    // Redirect to login form
    setShowLogin(!showLogin);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Find user with matching email and password
    const foundUser = users.find(user => user.email === email && user.password === password && user.userType === userType);
    if (foundUser) {
      alert('Login successful!');
    } else {
      alert('Invalid email, password, or user type.');
    }
    // Clear input fields
    setEmail('');
    setPassword('');
    setUserType('');
  };
  return (
    <div className="profile-page">
      {/* Conditional rendering for signup/login form */}
      {showLogin ? (
        // Signup form
        <div>
          <div className='signupbox'>
            <h2 className='profile-head'>Sign Up</h2>
            <form onSubmit={handleSignup} className='loginform'>
              <label className='text-lable'>User Type:
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                  className='input'
                >
                  <option value="">Select User Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                  <option value="type4">Type 4</option>
                  <option value="type5">Type 5</option>
                </select>
              </label>
              <label className='text-lable'>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input'
                />
              </label>
              <br />
              <label className='text-lable'>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='input'
                />
              </label>
              <br />
              <label className='text-lable'>
                Confirm Password:
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='input'
                />
              </label>
              <br />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button type="submit" className='button'>
                  Sign Up
                </button>
                <p onClick={handleShowLogin}>Login</p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Login form
        <div>
          <div className='signupbox'>
            <h2 className='profile-head'>Login</h2>
            <form onSubmit={handleLogin} className='loginform'>
              <label className='text-lable'>User Type:
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                  className='input'
                >
                  <option value="">Select User Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                  <option value="type4">Type 4</option>
                  <option value="type5">Type 5</option>
                </select>
              </label>
              <label className='text-lable'>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input'
                />
              </label>
              <br />
              <label className='text-lable'>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='input'
                />
              </label>
              <br />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button type="submit" className='button' >
                  <Link to={`/home/${userType}`}>
                  Login
                  </Link>
                </button>
                <p onClick={handleShowLogin}>Sign up</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
