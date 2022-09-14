import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <>
      <ul className="nav">
        <Link className="nav-li" to="/"></Link>
        {/* <Link className="nav-li" to="/create">
          Create
        </Link>
        <Link className="nav-li" to="/delete">
          Delete
        </Link> */}
        {/* <Link className="nav-li" to="/update">
          Update
        </Link> */}
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;
