import { Link } from 'react-router-dom';

import './navbar.css'
function NavBar() {
    return (
        <div >
            <nav className='nav-component'>
                <Link to="/" className='link-component'>Home</Link>
                <Link to="/login" className='link-component'>Login/Signup</Link>
            </nav>
        </div>
    )
}

export default NavBar;