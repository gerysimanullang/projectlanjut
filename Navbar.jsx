import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  };

  const logoStyle = {
    width: '50px', // Sesuaikan ukuran logo
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '15px',
  };

  const searchStyle = {
    marginRight: '15px',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const profileImgStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-left">
        <img src="path/to/logo.png" alt="Logo" style={logoStyle} />
      </div>
      <div style={linkContainerStyle}>
        <div>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/certifications" style={linkStyle}>Certification History</Link>
          <Link to="/faq" style={linkStyle}>Faq</Link>
        </div>
        <div style={searchStyle}>
          <input type="text" placeholder="Search" />
        </div>
        <div style={profileContainerStyle}>
          <Link to="/profile">
            <img src="path/to/profile-picture.jpg" alt="Profile" style={profileImgStyle} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

