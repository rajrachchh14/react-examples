import React from 'react';
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    <>
      <Link to="/">Home Page</Link>

      <Link to="/list">List</Link>

      <Link to="/detail">Detail</Link>

      <Link to="/search">Searchs</Link>

      <Link to="/create">Create</Link>
    </>
  );
}

export default Topbar;
