import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import SearchBar from './SearchBar';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => (state.auth));
  const dispatch = useDispatch();

  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className='navbar-text text-light mr-3'>
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>

      </span>
      <li className="nav-item">
        <button className='nav-link btn btn-info btn-sm text-light'
          onClick={() => {
            console.log("Logout button clicked"); // Add this line
            dispatch(logout());
          }}>Logout</button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to="/register" className="nav-link">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">Login</NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-4 bgcol" style={style.fixm}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">CRM Model</a>
        {/* {isAuthenticated && <SearchBar />} */}
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};
const style = {
  fixm: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 4px 2px -2px gray',
  }
};
export default Header;
